import express from "express";
import { createUser, getUsers } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRouter = express.Router();

//user registration route
userRouter.post("/create", createUser as any);
userRouter.get("/getUsers", authMiddleware as any, getUsers as any);
userRouter.get("/getUser/:id", authMiddleware as any, getUsers as any);

export default userRouter;
