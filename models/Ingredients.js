const mongoose = require('./connection');

const ingredientSchema = new mongoose.Schema({
  ingredientName: { type: String, required: true, min:5},
  totalQuantity: { type: Number, required: true},
  unitID: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: false}, //set to true afterwards!!
  avgCost: { type: Number, required: false, default: 0.00},
});

const Ingredient = mongoose.model('ingredient', ingredientSchema);

// Add Ingredient
exports.addIngredient = function(obj, next) {
  const ingredient = new Ingredient(obj);
  //console.log(ingredient);
  ingredient.save(function(err, add) {
    next(err, add);
  });
};

// Get all
exports.getAll = (param, next) => {
  Ingredient.find({}, (err, ingredients) => {
    next(err, ingredients);
  });
};