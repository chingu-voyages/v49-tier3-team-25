import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    unique:true,
    required:true
  },
  password: {
    type: String,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", adminSchema);
