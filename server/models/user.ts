import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book', 
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true
  },
}, { _id: false });

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
  carts: [cartSchema],
});

export const User = mongoose.model("User", userSchema);