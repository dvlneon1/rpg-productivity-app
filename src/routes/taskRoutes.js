import express from "express"
import { createTask, completeTask, getTasks, deleteTask, updateTask } from "../controllers/taskController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { validateCreateTask, validateUpdateTask } from "../middlewares/taskValidationMiddleware.js"

const router = express.Router()

router.post("/", authMiddleware, validateCreateTask, createTask)
router.get("/", authMiddleware, getTasks)
router.patch("/:id/completed", authMiddleware, completeTask)
router.delete("/:id", authMiddleware, deleteTask)
router.patch("/:id", authMiddleware, validateUpdateTask, updateTask)

export default router