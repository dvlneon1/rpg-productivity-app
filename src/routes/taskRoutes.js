import express from "express"
import { createTask, completeTask, getTasks } from "../controllers/taskController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/", authMiddleware, createTask)
router.get("/", authMiddleware, getTasks)
router.patch("/:id/completed", authMiddleware, completeTask)

export default router