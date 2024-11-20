import express from "express";
import { Login } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const authRouter = express.Router();

//user login
authRouter.post("/login", Login as any);

export default authRouter;
