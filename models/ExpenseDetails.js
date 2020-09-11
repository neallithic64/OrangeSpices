const mongoose = require('./connection');

const expenseDetailSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true, min: 5 },
  expenseAmount: { type: Number, required: true },
  expenseID: { type: mongoose.Schema.Types.ObjectId, ref: 'expense', required: false}, //set to true afterwards!!
});

const ExpenseDetail = mongoose.model('expenseDetail', expenseDetailSchema);

// Add expense detail
exports.add = function(obj, next) {
  const expenseDetail = new ExpenseDetail(obj);
  expenseDetail.save(function(err, add) {
    next(err, add);
  });
};
  
// Get all expense details
exports.getAll = (param, next) => {
  ExpenseDetail.find({}).populate('expenseID').exec((err, details) => next(err, details));
};