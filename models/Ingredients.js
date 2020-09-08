const mongoose = require('./connection');

const ingredientSchema = new mongoose.Schema({
  ingredientName: { type: String, required: true, min:5},
  totalQuantity: { type: Number, required: false, default: 0},
  unitID: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: false}, //set to true afterwards!!
  avgCost: { type: Number, required: false, default: 0.00},
});

const Ingredient = mongoose.model('ingredient', ingredientSchema);

// Add Ingredient
exports.add = function(obj, next) {
  const ingredient = new Ingredient(obj);
  ingredient.save(function(err, add) {
    next(err, add);
  });
};

// Get all ingredients
exports.getAll = (param, next) => {
  Ingredient.find({}).populate('unitID').exec((err, ingredients) => next(err, ingredients));
};

// Find ingredient
exports.getOne = function(query, next) {
  Ingredient.findOne(query, function(err, ingredient) {
    next(err, ingredient);
  });
};

// Get ingredient names
exports.getName = function(query, next) {
  Ingredient.find(query, function(err, ingredients){
    next(err, ingredients);
  });
};