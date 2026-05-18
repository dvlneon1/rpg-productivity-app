import dotenv from 'dotenv'
dotenv.config()

import admin from 'firebase-admin'
import { readFile } from 'fs/promises'

const serviceAccount = JSON.parse(
    await readFile(new URL(process.env.FIREBASE_KEY_PATH, import.meta.url))
)

try{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })

    console.log("Conectado ao firebase")

} catch (error) {
    console.error("Erro ao conectar firebase:", error)
}

const db = admin.firestore()

export default db