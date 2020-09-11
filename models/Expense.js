const mongoose = require('./connection');

const expenseSchema = new mongoose.Schema({
  expenseName: { type: String, required: true, min:5},
  expenseType: { type: String, required: true },
});

const Expense = mongoose.model('expense', expenseSchema);

// Add expense
exports.add = function(obj, next) {
  const expense = new Expense(obj);
  expense.save(function(err, add) {
    next(err, add);
  });
};
  
// Get all expense
exports.getAll = (param, next) => {
  Expense.find({}, (err, expense) => {
    next(err, expense);
  });
};

// Find expense
exports.getOne = function(query, next) {
  Expense.findOne(query, function(err, expense) {
    next(err, expense);
  });
};

// Get expense names
exports.getName = function(req, next) {
  Expense.find({}, {expenseName: 1, _id:1}, function(err, expense) { 
    next(err, expense); 
  });
};