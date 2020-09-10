const ingredientModel = require('../models/Ingredients');
const { validationResult } = require('express-validator');

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

// Adding ingredient
exports.addIngredient = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    const { ingredientName, unit } = req.body;
 
    ingredientModel.getOne({ ingredientName: {$regex: ingredientName, $options:'i'}}, (err, result) => {
      if (result) {
				req.flash('error_msg', 'Already have that ingredient. Try again.');
				res.redirect('/ingredients/add');
      } else {
        console.log("ingredientName");
        console.log(ingredientName);
        if(ingredientName && unit){
          var ingredient = {
            ingredientName: ingredientName,
            unitID: unit,
          }
        }

        ingredientModel.add(ingredient, function(err, result){
          if(err){
            console.log(err);
            req.flash('error_msg', 'Could not add ingredient. Please try again.');
            res.redirect('/ingredients/add');
          }
          else {
            console.log("Ingredient added!");
            res.redirect('/ingredients');
            console.log(result);
          }
        })
      }
    });
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' '));
    res.redirect('/ingredients/add');
  }
}; 

exports.getIngredientName = (param, callback) => {
  ingredientModel.getName({ingredientName: true}, (err, ingredients) => {
    if (err) throw err;
      
    const ingredientsObjects = [];
      
    ingredients.forEach(function(doc) {
      ingredientsObjects.push(doc.toObject());
    });
      
    callback(ingredientsObjects);
  });
};