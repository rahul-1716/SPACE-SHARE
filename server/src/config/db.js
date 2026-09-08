import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV.DB_URL);
    console.log(
      `✅ MongoDB successfully connected ${connection.connection.host}`,
    );
  } catch (error) {
    console.error(`❌ MongoDB connection failed ${error}`);
    process.exit(1);
  }
};
