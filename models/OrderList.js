const mongoose = require('./connection');

const orderListSchema = new mongoose.Schema({
  orderDate: { type: Date, required: true},
  totalAmount: { type: Number, required: false}, //set to true afterwards!!
});

const OrderList = mongoose.model('orderList', orderListSchema);

// Add Order List
exports.add = function(obj, next) {
  const orderList = new OrderList(obj);
  orderList.save(function(err, add) {
      next(err, add);
  });
};