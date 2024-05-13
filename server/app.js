"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("dotenv/config");
// import { router as HealthRouter } from "./routes/healthcheck";
var mongoose_1 = require("mongoose");
var auth_1 = require("./routes/auth");
var MONGODB_URI = 'mongodb+srv://user:2tdk4aFuqjIppYfY@cluster0.y2bazek.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0';
var app = express();
app.use(express.json());
app.use("/", auth_1.router);
// app.use("/health", HealthRouter);
// const PORT = process.env.PORT;
mongoose_1.default.connect(MONGODB_URI)
    .then(function (result) {
    console.log('DB Connected');
    app.listen(8080);
})
    .catch(function (err) {
    console.log(err);
});
// shehroz: here i don't know how to use this db connection thats why i made my own connectrion
// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// });
