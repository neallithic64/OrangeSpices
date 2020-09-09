const mongoose = require('./connection');

const supplySchema = new mongoose.Schema({
  brandName: { type: String, required: true, min:5},
  totalSupply: { type: Number, required: true, default: 0.00},
  ingredientID: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: true}, //set to true afterwards!!
});

const Supplies = mongoose.model('supply', supplySchema);

// Add Supply
exports.add = function(obj, next) {
  const supply = new Supplies(obj);
  supply.save(function(err, add) {
    next(err, add);
  });
};
  
// Get all supplies
exports.getAll = (param, next) => {
  Supplies.find({}).populate({path: 'ingredientID', populate: {path: 'unitID'}}).exec((err, supplies) => next(err, supplies));
};

// Find supply
exports.getOne = function(query, next) {
  Supplies.findOne(query, function(err, supply) {
    next(err, supply);
  });
};