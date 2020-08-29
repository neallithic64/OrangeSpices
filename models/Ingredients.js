const mongoose = require('./connection');

const ingredientSchema = new mongoose.Schema({
  ingredientName: { type: String, required: true, min:5},
  quantity: { type: Number, required: true},
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: false} //set to true afterwards!!
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