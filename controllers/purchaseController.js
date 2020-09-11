const purchaseModel = require('../models/PurchaseSupplies');
const supplyModel = require('../models/Supplies');
const { validationResult } = require('express-validator');

//Getting all purchase
exports.getAllPurchase = (param, callback) =>{
    purchaseModel.getAll(param, (err, purchase) => {
    if (err) throw err;
      
    const purchasesObjects = [];
      
    purchase.forEach(function(doc) {
        purchasesObjects.push(doc.toObject());
    });
      
    callback(purchasesObjects);
  });
};

// Adding purchase
exports.addPurchase = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    const { purchDate, supplyName, numItems, expDate, purchPrice } = req.body;
   
    if (supplyName == "Select supply name..."){
      req.flash('error_msg', 'Please select supply name.');
      res.redirect('/purchase/add');
    } else {
      var total;
      total = numItems * purchPrice;
      
      var purchase = {
        purchaseDate: purchDate,
        supplyID: supplyName,
        purchaseQty: numItems,
        expiryDate: expDate,
        purchasePrice: purchPrice,
        totalPrice: total
      }
      
      purchaseModel.add(purchase, function(err, result){
        if(err){
          console.log(err);
          req.flash('error_msg', 'Could not add purchase. Please try again.');
          res.redirect('/purchase/add');
        }
        else {
          var suppID = result.supplyID;
          var quantity = result.purchaseQty;
          var updateStock = {
            $inc: { 
              totalSupply: quantity
            }
          };
          console.log("Purchase added!");
          res.redirect('/procurement');
          console.log(result);

          supplyModel.updateStock(suppID, updateStock, (err, result) => {
            if (err) {
              console.log('Could not update stock.');
            } else {
              console.log('Stock updated!');
              console.log(result);
            }
          })
        }
      })
    }
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