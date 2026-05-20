import db from "../config/firebase.js";

export async function getProfile (req, res){
    try{
        const userDoc = await db.collection("users").doc(req.user.id).get()

        if (!userDoc.exists){
            return res.status(401).json({
                error: "Usuário não encontrado"
            })
        }

        const userData = userDoc.data()
        return res.json({
            id: userDoc.id,
            username: userData.username,
            email: userData.email,
            level: userData.level,
            xp: userData.xp,
            discipline: userData.discipline,
            knowledge: userData.knowledge,
            mentality: userData.mentality,
            body: userData.body,
            social: userData.social,
            finances: userData.finances
        })

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao buscar perfil"
        })
    }
}