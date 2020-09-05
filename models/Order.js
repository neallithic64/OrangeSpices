const mongoose = require('./connection');
const { Double } = require('bson');

const orderSchema = new mongoose.Schema({
  orderStatus: { type: String, required: true, min:5},
  orderDate: { type: Date, required: true},
  amount: { type: Double, required: true},
});

const Order = mongoose.model('order', orderSchema);