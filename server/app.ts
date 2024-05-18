import express from 'express';
import morgan from 'morgan';
import db from './config/db';
import 'dotenv/config';

import { router as AuthRouter } from './routes/auth';
import { router as HealthRouter } from './routes/healthcheck';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/', AuthRouter);
app.use('/health', HealthRouter);

const PORT = process.env.PORT;
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

// const express = require("express");
// import db from "./config/db";
// import "dotenv/config";
// // import { router as HealthRouter } from "./routes/healthcheck";
// import mongoose, { Mongoose } from "mongoose";
// import { router as AuthRouter } from "./routes/auth";

// const MONGODB_URI = 'daatabase-connection-url';

// const app = express();

// app.use(express.json());

// app.use("/", AuthRouter);
// // app.use("/health", HealthRouter);

// // const PORT = process.env.PORT;

// mongoose.connect(MONGODB_URI)
//   .then(result => {
//     console.log('DB Connected');
//     app.listen(8080);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// // shehroz: here i don't know how to use this db connection thats why i made my own connectrion
// // db.once("open", () => {
// //   app.listen(PORT, () => {
// //     console.log(`Server is running on port: ${PORT}`);
// //   });
// // });
