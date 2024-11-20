import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import userRouter from "./routes/user.router";
import authRouter from "./routes/auth.router";

dotenv.config();

const app = express();

//middleware to parse json
app.use(express.json());

// Connect to MongoDB
connectDB();

// routes
app.use("/user", userRouter);
app.use("/auth", authRouter);

export default app;
