import db from "../config/firebase.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function registerUser(req, res){
    try {
        const { email, username, password } = req.body

        async function checkEmailExists(){
            const emailRegisterQuery = await db.collection('users').where('email', "==", email).get()
            return !emailRegisterQuery.empty
        }

        const emailExists = await checkEmailExists()

        if(emailExists){
            return res.status(409).json({
                message: "Email ja cadastrado"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const newUser = {
            username,
            password: hashedPassword,
            email,

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
        
        const userRef = await db.collection('users').add(newUser)

        return res.status(201).json({

            message: "cadastro efetuado com sucesso",
            id: userRef.id,
            username,
            email
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error ao criar usuário"
        })
    }

}

export async function loginUser(req, res){
    try {
        const { email, password } = req.body
        
        const snapshot = await db.collection("users").where("email", "==", email).get()
    
        if (snapshot.empty){
            return res.status(401).json({
                error: "Credenciais inválidas"
            })
        }

        const userDoc = snapshot.docs[0]
        const userData = userDoc.data()

        const passwordCompare = await bcrypt.compare(password, userData.password)

        if (!passwordCompare){
            return res.status(401).json({
                error: "Credenciais inválidas"
            })
        }

        const token = jwt.sign({
            id: userDoc.id,
            username: userData.username,
            email: userData.email
        },
            process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        })

        return res.json({
            token
        })
    } catch (error) {
        
    }
}


export async function testHash(req, res){
    try {
        
        const { password } = req.body

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        return res.json({
            hash
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Erro ao gerar hash"
        })
    }
}

export async function testCompare(req, res){
    try {
        
        const { password, hash } = req.body

        const isMatch = await bcrypt.compare(password, hash)
        return res.json({
            match: isMatch
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Erro ao comparar senha"
        })
    }
}

export async function testToken(req, res) {
    try {
        console.log(process.env.JWT_SECRET)
        const { id, username } = req.body

        const token = jwt.sign({
            id,
            username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        })

        return res.json({
            token
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Não foi possivel gerar token..."
        })
    }
}