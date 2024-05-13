"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("dotenv/config");
// import { router as HealthRouter } from "./routes/healthcheck";
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./routes/auth");
const MONGODB_URI = 'mongodb+srv://user:2tdk4aFuqjIppYfY@cluster0.y2bazek.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0';
const app = express();
app.use(express.json());
app.use("/", auth_1.router);
// app.use("/health", HealthRouter);
// const PORT = process.env.PORT;
mongoose_1.default.connect(MONGODB_URI)
    .then(result => {
    console.log('DB Connected');
    app.listen(8080);
})
    .catch(err => {
    console.log(err);
});
// shehroz: here i don't know how to use this db connection thats why i made my own connectrion
// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// });
