const mongoose = require('./connection');

const supplySchema = new mongoose.Schema({
  brandName: { type: String, required: true, min:5},
  totalSupply: { type: Number, required: true, default: 0.00},
  unitQuantity: { type: Number, required: true},
  ingredientID: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: true}, 
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

// Get supply names
exports.getName = function(req, next) {
  Supplies.find({}, {brandName: 1, _id:1}, function(err, supply) { 
    next(err, supply); 
  });
};