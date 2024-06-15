import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    required: true
  },
  currentStatus: {
    type: String,
    enum: ['PENDING', 'CONFIRMED', 'PROCESSING', 'ON_DELIVERY', 'DELIVERED', 'CANCELED'],
    required: true
  },
  timelineStatus: [{
    status: {
      type: String,
      enum: ['CONFIRMED', 'PROCESSING', 'ON_DELIVERY', 'DELIVERED', 'CANCELED'],
      required: true
    },
    date: {
      type: Date,
      required: true
    },
  }],
  items: {
    type: Object,
    require: true,
  },
  recipientProfile : {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
  },
  recipientAddress : {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    },
  },
  paymentMethod: {
    type: {
      type: String,
      enum: ['CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER'],
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    cardHolderName: {
      type: String,
      required: true,
    },
  },
  total: {
    type: Number,
    required: true,
  },
});

export const Order = mongoose.model('Order', orderSchema);
