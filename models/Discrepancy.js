const mongoose = require('./connection');

const discrepancySchema = new mongoose.Schema({
  physicalCount: { type: Number, required: true },
  date: { type: Date, required: true},
  supplyID: { type: mongoose.Schema.Types.ObjectId, ref: 'supply', required: false}, //set to true afterwards!!
});

const Discrepancy = mongoose.model('discrepancy', discrepancySchema);

// Add discrepancy
exports.add = function(obj, next) {
  const discrepancy = new Discrepancy(obj);
  discrepancy.save(function(err, add) {
    next(err, add);
  });
};

// Get all discrepancy
exports.getAll = (param, next) => {
    Discrepancy.find({}, (err, discrepancy) => {
    next(err, discrepancy);
  });
};