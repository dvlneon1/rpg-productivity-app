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

export async function validTaskOwner(userId){

    const taskRef = db.collection("tasks").doc(userId)
    const taskDoc = await taskRef.get()

    if(!taskDoc.exists){
        return null
    }

    const taskData = taskDoc.doc

    if (!taskData.userId !== req.user.id){
        return null
    }

    return {
        taskRef
    }

}

export async function difficultyTask(difficulty){

    

} 