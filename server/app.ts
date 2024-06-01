import express from 'express';
import morgan from 'morgan';
import db from './config/db';
import 'dotenv/config';

import { errorConverter, errorHandler } from './middleware/error';

import { router as AdminRouter } from './routes/admin';
import { router as UserRouter } from './routes/user';
import { router as HealthRouter } from './routes/healthcheck';
import { router as BookRouter } from './routes/book';

const app = express();

app.use(express.json());

// logging HTTP requests
app.use(morgan('dev'));

// api routes
app.use('/health', HealthRouter);
app.use('/admins', AdminRouter);
app.use('/users', UserRouter);
app.use('/books', BookRouter);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

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
