import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(`MongoDB URI: ${process.env.MONGO_URI}`);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Unexpected error", error);
    }
    process.exit(1);
  }
};

export default connectDB;
