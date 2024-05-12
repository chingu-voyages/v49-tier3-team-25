import express from "express";
import db from "./config/db";
import "dotenv/config";
import { healthcheck } from "./controllers/healthcheck";

const app = express();

app.use(express.json());

app.use("/health", healthcheck);

const PORT = process.env.PORT;
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
