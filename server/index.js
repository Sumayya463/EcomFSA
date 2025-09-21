import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

app.use(cors());



app.get("/", (req, res) => {
  res.send("API is running...");
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () =>
      console.log(`Server running on http://localhost:5000`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));




