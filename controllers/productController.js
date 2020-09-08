const productModel = require('../models/Product');
const { validationResult } = require('express-validator');

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
    const { prodName, prodPrice } = req.body;

    productModel.getOne({ prodName: {$regex: prodName, $options:'i'}}, (err, result) => {
      if (result) {
				req.flash('error_msg', 'Already have that product. Try again.');
				res.redirect('/products/add');
      } else {
        if(prodName != ""){
          var product = {
            prodName: prodName,
            prodPrice: prodPrice,
          }
        }

        productModel.add(product, function(err, result){
          if(err){
            console.log(err);
            req.flash('error_msg', 'Could not add product. Please try again.');
            res.redirect('/products/add');
          }
          else {
            console.log("Product added!");
            res.redirect('/product');
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