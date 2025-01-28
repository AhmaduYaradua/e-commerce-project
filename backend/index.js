import "dotenv/config";
import express from "express";
import cors from "cors";

import ordersRoute from "./routes/ordersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://localhost:5173",
      "https://e-commerce-project-kappa-ten.vercel.app/",
      "https://e-commerce-project-kappa-ten.vercel.app",
    ],
  })
);

app.use(express.json());

app.use("/api/v1/order", ordersRoute);
app.use("/api/v1/auth", authRoutes);

app.get("/server-health", (req, res) => {
  res.status(200).json({ message: "system is running successfully" });
});

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database connection successfully");
  } catch (error) {
    console.log(error);
  }
}

app.listen(PORT, async () => {
  await connectToDB();
  console.log("Server is listening on port" + PORT);
});
