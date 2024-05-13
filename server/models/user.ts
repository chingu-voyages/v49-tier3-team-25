import mongoose from "mongoose";

// Modify as needed
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
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
  cart: {
    items:[{
      bookId:mongoose.Schema.ObjectId,
      quantity:Number
    }]
  },
  wishList:{
    items:[{
      bookId:mongoose.Schema.ObjectId
    }]
  }
});

export const User = mongoose.model("User", userSchema);
