import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import userRouter from "./routes/user.router";
import authRouter from "./routes/auth.router";
import ticketRouter from "./routes/ticket.router";

dotenv.config();

const app = express();

//middleware to parse json
app.use(express.json());

// Connect to MongoDB
connectDB();

// routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/ticket", ticketRouter);

export default app;
