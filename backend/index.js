import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import dataConnection from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
dataConnection();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
