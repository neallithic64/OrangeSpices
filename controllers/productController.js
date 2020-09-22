const productModel = require('../models/Product');
const { validationResult } = require('express-validator');
const prodIng = require('../models/productIngredients'); 

//Getting all products
exports.getAllProducts = (param, callback) =>{
    productModel.getAll(param, (err, products) => {
    if (err) throw err;
      
    const productsObjects = [];
      
    products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
    });
      
    callback(productsObjects);
  });
};

// Adding product
exports.addProduct = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    const { prodName, category, productPrice, ingredientName } = req.body;

    productModel.getOne({ prodName: {$regex: prodName, $options:'i'}}, (err, result) => {
      if (result) {
				req.flash('error_msg', 'Already have that product. Try again.');
				res.redirect('/products/add');
      } 
      else {
          var product = {
            prodName: prodName,
            category: category,
            prodPrice: productPrice

           //ingredientID: ingredient,
            //quantityNeeded: quantity
           // unitID: unit

        }

        productModel.add(product, function(err, result){
          if(err){
            console.log(err);
            req.flash('error_msg', 'Could not add product. Please try again.');
            res.redirect('/products/add');
          }
          else {
            console.log("Product added!");
            req.flash('success_msg', 'Product added!'); 
            res.redirect('/products');
            console.log(result);
          }
        })
      }
    });
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/products/add');
  }
}; 

exports.getProductName = (param, callback) => {
  productModel.getName({prodName : true}, (err, ingredients) => {
    if (err) throw err; 

    const productsObjects = [];

    products.forEach(function(doc) {
      productsObjects.push(doc.toObject());
    });

    callback(productsObjects);
  });
};