const ingredientModel = require('../models/Ingredients');

//Getting all ingredients
exports.getAllIngredients = (param, callback) =>{
    ingredientModel.getAll(param, (err, ingredients) => {
      if (err) throw err;
      
      const ingredientsObjects = [];
      
      ingredients.forEach(function(doc) {
        ingredientsObjects.push(doc.toObject());
      });
      
      callback(ingredientsObjects);
    });
};