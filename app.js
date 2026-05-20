import  db  from "./src/config/firebase.js"
import express from "express"
import taskRoutes from "./src/routes/taskRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"
import authRoutes from "./src/routes/authRoutes.js"


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/tasks", taskRoutes)
app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`conectado em http://localhost:${PORT}`)
})