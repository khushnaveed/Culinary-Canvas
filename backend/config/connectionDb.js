import mongoose from "mongoose";
import { config } from "dotenv";


config();

export const connectDb = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_STRING);
      console.log("DB connection successful");
    } catch (err) {
      console.error("Error connecting to DB:", err.message);
    }
  };
  