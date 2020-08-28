const mongoose = require('./connection');

const ingredientSchema = new mongoose.Schema({
    ingredientName: { type: String, required: true, min:5},
	quantity: { type: Number, required: true},
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

