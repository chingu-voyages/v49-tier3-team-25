import mongoose from "mongoose";

// Modify as needed
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "buyer"],
  },
});

export const User = mongoose.model("User", userSchema);
