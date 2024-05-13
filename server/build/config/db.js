"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
if (!process.env.DB_URI) {
    throw new Error("DB_URI environment variable is not set");
}
const db_uri = process.env.DB_URI;
mongoose_1.default.connect(db_uri, {
    autoIndex: true,
});
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});
exports.default = db;
