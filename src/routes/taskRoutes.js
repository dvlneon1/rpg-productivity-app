import express from "express"
import { createTask, completeTask, getTasks } from "../controllers/taskController.js"
import { createUser } from "../controllers/userController.js"

const router = express.Router()

router.post("/", createTask)
router.get("/", getTasks)
router.patch("/:id/completed", completeTask)
router.post("/", createUser)

export default router