import express from "express";
import {
  addTicket,
  getTickets,
  getTicketById,
} from "../controllers/ticket.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const ticketRouter = express.Router();

//route to add a new ticket
ticketRouter.post("/addTicket", authMiddleware as any, addTicket as any);
ticketRouter.get("/getTickets", authMiddleware as any, getTickets as any);
ticketRouter.get(
  "/getTicketById/:id",
  authMiddleware as any,
  getTicketById as any
);

export default ticketRouter;
