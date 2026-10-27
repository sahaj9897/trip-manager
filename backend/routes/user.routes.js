import express from "express";
import { generateTrip } from "../controllers/model.controller.js";
import { loginUser, registerUser,authUser } from "../controllers/user.controller.js";
import getUser from "../middleware/auth.js";


const router = express.Router();
router.post("/generate/trip",generateTrip);
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/auth",getUser,authUser);

export default router;