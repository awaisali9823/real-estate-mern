import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json()); // this allows to send json as input to server
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Api route

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
