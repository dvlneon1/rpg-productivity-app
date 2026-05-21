import db from "../config/firebase.js"

export async function getTaskById(id){
        
    const taskRef = db.collection("tasks").doc(id)
    const taskDoc = await taskRef.get()
        
    if (!taskDoc.exists){
        return null
    }

    const taskData = taskDoc.data()

    return {
        taskRef,
        taskDoc,
        taskData
    }
}

export async function validateTaskOwner(taskData, loggedUserId){
    return taskData.userId === loggedUserId
}

export async function difficultyTask(difficulty){

    

} 