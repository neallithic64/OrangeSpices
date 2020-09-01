const mongoose = require('./connection');
const { Double } = require('bson');

const expenseDetailSchema = new mongoose.Schema({
  month: { type: String, required: true, min:5},
  expenseAmount: { type: Double, required: true },
  expenseID: { type: mongoose.Schema.Types.ObjectId, ref: 'expense', required: false}, //set to true afterwards!!
});

const ExpenseDetail = mongoose.model('expenseDetail', expenseDetailSchema);