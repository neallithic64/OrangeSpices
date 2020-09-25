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
    const { prodName, category, prodPrice, ingredientName } = req.body;
    productModel.getOne({ prodName: {$regex: prodName, $options:'i'}}, (err, result) => {
      if (result) {
				req.flash('error_msg', 'Already have that product. Try again.');
				res.redirect('/products/add');
      } 
      else {
          var product = {
            prodName: prodName,
            category: category,
            prodPrice: prodPrice

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

exports.getAlaCarte = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getAC({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });

      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};

exports.getBeefRiceMeal = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getBRM({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });

      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};

exports.getPorkRiceMeal = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getPRM({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });
      
      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};

exports.getChickenRiceMeal = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getCRM({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });
      
      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};

exports.getAllDayBreakfast = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getADB({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });
      
      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};

exports.getBakedSpaghetti = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getBSPAG({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });
      
      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};

exports.getBakedSushi = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    productModel.getBSUSH({prodName: true}, (err, products) => {
      const productsObjects = [];

      products.forEach(function(doc) {
        productsObjects.push(doc.toObject());
      });
    
      res(productsObjects);
    })
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' ')); 
    res.redirect('/POS');
  }
};