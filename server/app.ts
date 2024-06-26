import express from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import db from './config/db';
import 'dotenv/config';

import { errorConverter, errorHandler } from './middleware/error';

import { router as HealthRouter } from './routes/healthcheck';
import { router as AdminRouter } from './routes/admin';
import { router as UserRouter } from './routes/user';
import { router as HomeRouter } from './routes/home';
import { router as DashboardRouter } from './routes/dashboard';
import { router as BookRouter } from './routes/book';
import { router as WishlistRouter } from './routes/wishlist';
import { router as CartRouter } from './routes/cart';
import { router as OrderRouter } from './routes/order';

const app = express();

// use Gzip compression middleware
app.use(compression());

// parse JSON requests
app.use(express.json());

// enable CORS
app.use(cors());

// logging HTTP requests
app.use(morgan('dev'));

// api routes
app.use('/health', HealthRouter);
app.use('/admins', AdminRouter);
app.use('/users', UserRouter);
app.use('/home', HomeRouter);
app.use('/dashboard', DashboardRouter);
app.use('/books', BookRouter);
app.use('/wishlists', WishlistRouter);
app.use('/carts', CartRouter);
app.use('/orders', OrderRouter);

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
