const supplyModel = require('../models/Supplies');
const { validationResult } = require('express-validator');

//Getting all supplies
exports.getAllSupplies = (param, callback) => {
  supplyModel.getAll(param, (err, supplies) => {
    if (err) throw err;
      
    const suppliessObjects = [];
      
    supplies.forEach(function(doc) {
      suppliessObjects.push(doc.toObject());
    });
      
    callback(suppliessObjects);
  });
};

//Add supplies
exports.addSupply = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    const { supplyBrand, ingredient } = req.body;

    supplyModel.getOne({ brandName: {$regex: supplyBrand, $options:'i'}}, (err, result) => {
      if (result) {
				req.flash('error_msg', 'Already have that supply. Try again.');
				res.redirect('/supplies/add');
      } else {
        if(supplyBrand != ""){
          var supply = {
            brandName: supplyBrand,
            ingredientID: ingredient,
          }
        }
            
        supplyModel.add(supply, function(err, result){
          if(err){
            console.log(err);
            req.flash('error_msg', 'Could not add supply. Please try again.');
            res.redirect('/supplies/add');
          }
          else {
            console.log("Supply added!");
            res.redirect('/supplies');
          }
        })
      }
    });
  } else {
    const messages = errors.array().map((item) => item.msg);
    req.flash('error_msg', messages.join(' '));
    res.redirect('/supplies/add');
  }
}; 