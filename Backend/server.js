
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/contect_Rotues.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/contact',router)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected ');
  } catch (error) {
    console.error('MongoDB Connection Error ', error.message);
    process.exit(1);
  }
};
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running at http://localhost:${PORT} `);
});


