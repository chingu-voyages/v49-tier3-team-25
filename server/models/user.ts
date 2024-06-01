import mongoose from "mongoose";

// Modify as needed
const userSchema = new mongoose.Schema({
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
  wishlists: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book' 
  }],
});

export const User = mongoose.model("User", userSchema);