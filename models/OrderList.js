const mongoose = require('./connection');

const orderListSchema = new mongoose.Schema({
  orderQuantity: { type: Number, required: true},
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: false}, //set to true afterwards!!
  orderID: { type: mongoose.Schema.Types.ObjectId, ref: 'order', required: false}, //set to true afterwards!!
});

const OrderList = mongoose.model('orderList', orderListSchema);