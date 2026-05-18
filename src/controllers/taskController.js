import db from "../config/firebase.js"

export async function createTask (req, res) {

    try {

        const {  title, difficulty, category, userId } = req.body 

        let xpReward = 0
    
        if ( difficulty === "easy" ) xpReward = 10
        if ( difficulty === "medium" ) xpReward = 25
        if ( difficulty === "hard" ) xpReward = 100
    
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
        const taskRef = db.collection("tasks").doc(id)
        const taskDoc = await taskRef.get()

        if(!taskDoc.exists){
            return res.status(404).json({
                error: "Tarefa não encontrada"
            })
        }

        const taskData = taskDoc.data()

        if (taskData.completed){
            return res.status(400).json({
                error: "Tarefa já foi completada"
            })
        }

        const userRef = db.collection("users").doc(taskData.userId)
        const userDoc = await userRef.get()

        if (!userDoc.exists){
            return res.status(404).json({
                error: "Usuário não encontrado"
            })
        }

        const userData = userDoc.data()

        let newXp = userData.xp + taskData.xpReward

        let newLevel = userData.level

        if (newXp >= 100) {

            newLevel += 1
            newXp -= 100
        }
    
        await userRef.update({
            xp: newXp,
            level: newLevel
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

        const snapshot = await db.collection("tasks").get()
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
