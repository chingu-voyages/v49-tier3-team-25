const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the subdocument schema for formats
const formatSchema = new Schema({
  format: {
    type: String,
    enum: ["paperback", "hardcover", "ebook", "audiobook"],
    required: true
  },
  price: {
    type: Number,
    min: 0.01,
    max: 1000.00,
    required: true
  },
  discount: {
    type: Number,
    min: 0,
    max: 1,
  },
  quantity: {
    type: Number,
    min: 1,
    max: 1000,
    required: true
  }
});

// Define the main book schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  author: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500
  },
  imageUrls: [{
    type: String,
    required: true
  }],
  isbn: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 13
  },
  publisher: {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },  
    location: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100
    }
  },
  published_date: {
    type: Date,
    required: true
  },
  language: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
    max: 10000
  },
  genres: [{
    type: String,
    required: true,
    enum: ["Fiction", "Non-fiction", "Science Fiction", "Fantasy", "Mystery", "Horror", "Romance", "Thriller", "Historical", "Biography", "Self-help", "Young Adult", "Children's", "Poetry", "Drama", "Comics & Graphic Novels"]
  }],
  tags: [{
    type: String,
    required: true,
  }],
  formats: [formatSchema],

  // Reference to Admin who created the book
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
});



export const Book = mongoose.model('Book', bookSchema);