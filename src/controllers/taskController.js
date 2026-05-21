import db from "../config/firebase.js"
import { getTaskById, validateTaskOwner } from "../helpers/taskHelpers.js"

export async function createTask (req, res) {

    try { 
        
        const { title, difficulty, category } = req.body
        const userId = req.user.id

        let xpReward = 0
    
        if ( difficulty === "easy" ) xpReward = 10
        if ( difficulty === "medium" ) xpReward = 25
        if ( difficulty === "hard" ) xpReward = 1000
    
        const newTask = {
            title,
            difficulty,
            category,
            userId,
            
            xpReward,
            completed: false,
            createdAt: new Date().toISOString()
        }
    
        const taskRef = await db.collection("tasks").add(newTask)
        return res.status(201).json({
            id: taskRef.id,
            ...newTask
        })

    } catch (error) {

        console.error(error)
        return res.status(500).json({
            error: "Não foi possivel adicionar Tarefa"
        })

    }

}

export async function updateTask(req, res){
    try {
        
        const { id } = req.params

        const loggedUserId = req.user.id

        const task = await getTaskById(id)

        if (!task) {
            return res.status(404).json({
                error: "Task não encontrada"
            })
        }

        const { taskRef, taskData } = task

        const isOwner = validateTaskOwner( taskData, loggedUserId )

        if (!isOwner){
            return res.status(403).json({
                error: "Sem autorização"
            })
        }

        const { title, difficulty, category } = req.body

        const updatedData = {}

        if (title !== undefined){
            updatedData.title = title
        }

        if (difficulty !== undefined){

            updatedData.difficulty = difficulty
        
            if (difficulty === "easy"){
                updatedData.xpReward = 10
            }

            if (difficulty === "medium"){
                updatedData.xpReward = 25
            }

            if (difficulty === "hard"){
                updatedData.xpReward = 1000
            }

        }

        if (category !== undefined){
            updatedData.category = category
        }

        updatedData.updatedAt = new Date().toISOString()
        await taskRef.update(updatedData)

        return res.json({
            message: "Task atualizada com sucesso"
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: "Erro ao atualizar Task"
        })
    }
}

export async function completeTask (req, res){
    
    try{
        
        const { id } = req.params
        
        const task = await getTaskById(id)

        if (!task){
            return res.status(404).json({
                error: "Tarefa não encontrada"
            })
        }
        
        const { taskRef,taskData } = task

        //task ja foi completa ?
        if (taskData.completed){
            return res.status(400).json({
                error: "Tarefa já foi completada"
            })
        }
        
        //task pertence a este usuário ?
        if (taskData.userId !== req.user.id){
            return res.status(403).json({
                error: "Você não possui acesso a esta task"
            })
        }


        //entrega XP

        const userRef = db.collection("users").doc(taskData.userId)
        const userDoc = await userRef.get()

        if (!userDoc.exists){
            return res.status(404).json({
                error: "Usuário não encontrado"
            })
        }

        const userData = userDoc.data()

        const currentXp = userData.xp
        const xpReward = taskData.xpReward
        
        
        let newLevel = userData.level
        let newXp = currentXp + xpReward
        
        let xpToNextLevel = newLevel * 100

        while (newXp >= xpToNextLevel){
            newLevel += 1
            newXp -= xpToNextLevel
            xpToNextLevel = newLevel * 100
        }


    
        await userRef.update({
            xp: newXp,
            level: newLevel,

            [taskData.category]:
                userData[taskData.category] + 1
        })

        await taskRef.update({
            completed: true
        })

        return res.json({
            message: "Task completa",
            gainedXP: taskData.xpReward,
            currentXp: newXp,
            level: newLevel
        })

    } catch (error) {
        
        console.error(error)
        res.status(500).json({
            error: "Erro ao completar Task"
        })

    }
}

export async function getTasks (req, res){

    try{
        
        const { difficulty, completed } = req.query

        let query = db.collection("tasks").where("userId", "==", req.user.id)

        if (difficulty){
            query = query.where("difficulty", "==", difficulty)
        }

        if (completed !== undefined){
            const completedValue = completed === "true"

            query = query.where("completed", "==", completedValue)
        }

        const snapshot = await query.get()

        const tasks = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        

        return res.json(tasks)
        
    }catch (error){
        
        console.error(error)
        return res.status(500).json({
            error: "Erro ao buscar tasks"
        })
        
    }

}

export async function deleteTask(req, res){
    
    try {
        const { id } = req.params
        const loggedUserId = req.user.id
        const task = await getTaskById(id)

        if (!task){
            return res.status(404).json({
                error: "Task não encontrada"
            })
        }

        const { taskRef, taskData } = task


        const isOwner = validateTaskOwner(taskData, loggedUserId)

        if (!isOwner){
            return res.status(403).json({
                error: "Sem autorização para deletar"
            })
        }


        await taskRef.delete()

        return res.json({
            message: "Task deletada com sucesso"
        })

        

    } catch (error) {
        console.error(error)

        res.status(500).json({
            error: "Erro ao deletar task"
        })
    }
}