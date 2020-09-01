const mongoose = require('./connection');

const expenseSchema = new mongoose.Schema({
  expenseName: { type: String, required: true, min:5},
  isRegular: { type: String, required: false, min:5, default: ""},
});

const Expense = mongoose.model('expense', expenseSchema);