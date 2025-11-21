import express from "express";
import mongoose from "mongoose";
import promoRoutes from "./routes/promoCode.routes";

const app = express();
app.use(express.json());

// Routes
app.use("/api/promocodes", promoRoutes);

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Something went wrong",
  });
});

// Start server
const startServer = async () => {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  console.log("MongoDB connected");

  app.listen(5000, () => console.log("Server running on :5000"));
};

startServer();
