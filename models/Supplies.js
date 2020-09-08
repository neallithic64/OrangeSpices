const mongoose = require('./connection');

const supplySchema = new mongoose.Schema({
    brandName: { type: String, required: true, min:5},
    supplyName: { type: String, required: true, min:5},
    totalSupply: { type: Number, required: true},
    unitQuantity: { type: Number, required: true},
    ingredientID: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: false}, //set to true afterwards!!
    unitID: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: false}, //set to true afterwards!!
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
  Supplies.find({}).populate('unitID ingredientID').exec((err, supplies) => next(err, supplies));
};

// Fine supply
exports.getOne = function(query, next) {
  Supplies.findOne(query, function(err, supply) {
    next(err, supply);
  });
};