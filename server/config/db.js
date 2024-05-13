"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
require("dotenv/config");
if (!process.env.DB_URI) {
    throw new Error("DB_URI environment variable is not set");
}
var db_uri = process.env.DB_URI;
mongoose_1.default.connect(db_uri, {
    autoIndex: true,
});
var db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
    console.log("Connected to MongoDB");
});
exports.default = db;
