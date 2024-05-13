const express = require("express");
import db from "./config/db";
import "dotenv/config";
// import { router as HealthRouter } from "./routes/healthcheck";
import mongoose, { Mongoose } from "mongoose";
import { router as AuthRouter } from "./routes/auth";

const MONGODB_URI = 'mongodb+srv://user:2tdk4aFuqjIppYfY@cluster0.y2bazek.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0';

const app = express();

app.use(express.json());

app.use("/", AuthRouter);
// app.use("/health", HealthRouter);


// const PORT = process.env.PORT;

mongoose.connect(MONGODB_URI)
  .then(result => {
    console.log('DB Connected');
    app.listen(8080);
  })
  .catch(err => {
    console.log(err);
  })

// shehroz: here i don't know how to use this db connection thats why i made my own connectrion
// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// });
