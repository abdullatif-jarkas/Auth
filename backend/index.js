// const express = require('express'); //? this is CommonJS way of importing
import express from "express";
import { connectDB } from "./db/connectDB.js"; //? whenever we import a local file it should always be extension in the end
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json()); //? allows us to parse incoming requests :req.body

//~ //////////////// Start Routes ////////////////

app.use("/api/auth", authRoutes);
app.get("*", (req, res) => {
  res.send("Not Found 404");
});

//~ //////////////// End Routes ////////////////



//* Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
