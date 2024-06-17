import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrls: [{
    type: String,
    required: true
  }],
  genres: [{
    type: String,
    required: true,
  }],
  sku: {
    type: String,
    required: true,
    unique:true,
  },
  stockQuantity : {
    type: Number,
    required: true,
    min: 0,
  },
  costPrice : {
    type: Number,
    required: true,
    min: 0,
  },
  salePrice: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    max: 1,
  },
  tags: [{
    type: String,
    required: true,
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  sales: {
    type: Number,
    default: 0,
  },
}, { 
  timestamps: true 
});

export const Book = mongoose.model('Book', bookSchema);