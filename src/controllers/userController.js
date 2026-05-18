import db from "../config/firebase.js";

export async function createUser(req, res){

    try{

        const { username } = req.body

        const newUser = {
            username,

            level: 1,
            xp: 0,

            discipline: 0,
            knowledge: 0,
            mentality: 0,
            body: 0,
            social: 0,
            finances: 0,

            createdAt: new Date().toISOString()
        }

        const userRef = await db.collection("users").add(newUser)

        return res.status(201).json({
            id: userRef.id,
            ...newUser
        })

    } catch (error) {
        return res.status(500).json({
            error: "Error ao criar usuário"
        })
    }

}