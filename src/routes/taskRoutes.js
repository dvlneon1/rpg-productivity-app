import express from "express"
import { createTask, completeTask, getTasks, deleteTask } from "../controllers/taskController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { validateCreateTask } from "../middlewares/taskValidationMiddleware.js"

const router = express.Router()

router.post("/", authMiddleware, validateCreateTask, createTask)
router.get("/", authMiddleware, getTasks)
router.patch("/:id/completed", authMiddleware, completeTask)
router.delete("/:id", authMiddleware, deleteTask)

export default router