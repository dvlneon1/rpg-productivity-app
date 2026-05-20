import express from "express"
import { testHash, testCompare, testToken, registerUser, loginUser } from "../controllers/authController.js"

const router = express.Router()

router.post("/test-hash", testHash)
router.post("/test-compare", testCompare)
router.post("/test-token", testToken)


router.post("/register", registerUser)
router.post("/login", loginUser)

export default router