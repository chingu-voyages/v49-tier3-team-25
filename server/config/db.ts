import mongoose from "mongoose";
import "dotenv/config"

if (!process.env.DB_URI) {
  throw new Error("DB_URI environment variable is not set");
}

const db_uri: string = process.env.DB_URI;
mongoose.connect(db_uri, {
  autoIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db
