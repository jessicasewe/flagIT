import { Request, Response } from "express";
import Ticket from "../models/ticket.model";

export const addTicket = async (req: Request, res: Response) => {
  const {
    serviceGroup,
    ticketGroup,
    ticketPriority,
    title,
    description,
    copy,
    files,
  } = req.body;

  try {
    //create a new ticket
    const newTicket = new Ticket({
      serviceGroup,
      ticketGroup,
      ticketPriority,
      title,
      description,
      copy,
      files,
    });

    await newTicket.save();

    res
      .status(201)
      .json({ message: "Ticket created successfully", ticket: newTicket });
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
  }
};

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tickets", error });
  }
};

export const getTicketById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ticket", error });
  }
};
