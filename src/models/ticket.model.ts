import mongoose from "mongoose";

// Define service groups
const serviceGroups = {
  technology: ["software", "hardware", "network"],
  products: ["development", "testing", "deployment"],
  finance: ["accounting", "budgeting", "reporting"],
  operations: ["logistics", "supply chain", "maintenance"],
  compliance: ["regulations", "audit", "risk management"],
};

// Validator for ticket group
const validateTicketGroup = function (
  this: { serviceGroup: keyof typeof serviceGroups },
  value: any
) {
  return serviceGroups[this.serviceGroup]?.includes(value);
};

// Define ticket schema
const ticketSchema = new mongoose.Schema({
  serviceGroup: {
    type: String,
    required: true,
    enum: Object.keys(serviceGroups),
  },
  ticketGroup: {
    type: String,
    required: true,
    validate: {
      validator: validateTicketGroup,
      message: (props: any) =>
        `${props.value} is not a valid ticket group for ${props.instance.serviceGroup}`,
    },
  },
  ticketPriority: {
    type: String,
    required: true,
    enum: ["low", "medium", "high", "critical"],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  copy: {
    type: Boolean,
    default: false,
  },
  files: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export model
const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
