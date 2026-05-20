import db from "../config/firebase.js"
import { getTaskById, validTaskOwner } from "../helpers/taskHelpers.js"

export async function createTask (req, res) {

    try {

        const {  title, difficulty, category } = req.body
        const validDifficulties = [
            "easy", 
            "medium", 
            "hard"
        ]
        const validCategories = [
            "discipline",
            "knowledge",
            "mentality",
            "body",
            "social",
            "finances"
        ]
        //verifica se titulo não é nulo, vazio, inexistente
        if (!title || !title.trim()){
            return res.status(400).json({
                error: "Título inválido"
            })
        }
        //verifica se fificuldade não é nulo, vazio, inexistente
        if (!validDifficulties.includes(difficulty)){
            return res.status(400).json({
                error: "Dificuldade inválida"
            })
        }
        //verifica se categoria não é nulo, vazio, inexistente
        if (!validCategories.includes(category)){
            return res.status(400).json({
                error: "Categoria inválida"
            })
        }

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

export async function completeTask (req, res){
    
    try{
        
        const { id } = req.params
        
        const task = await getTaskById(id)

        if (!task){
            return res.status(404).json({
                error: "Tarefa não encontrada"
            })
        }
        
        const { taskRef, taskData } = task

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
        const category = taskData.category

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

        const snapshot = await db.collection("tasks").where("userId", "==", req.user.id).get()
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
        const { id, userId } = req.params
        const task = await getTaskById(id)

        if (!task.exists){
            return res.status(404).json({
                error: "Task não encontrada"
            })
        }

        const {taskRef, taskData} = task


        const taskOwner = await validTaskOwner(userId)

        if (!taskOwner.exists){
            return res.status(403).json({
                error: "Sem autorização para deletar"
            })
        }
        
        const { taskData } = taskOwner

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