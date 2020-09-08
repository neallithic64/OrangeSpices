const supplyModel = require('../models/Supplies');

//Getting all supplies
exports.getAllSupplies = (param, callback) =>{
  supplyModel.getAll(param, (err, supplies) => {
    if (err) throw err;
      
    const suppliessObjects = [];
      
    supplies.forEach(function(doc) {
      suppliessObjects.push(doc.toObject());
    });
      
    callback(suppliessObjects);
  });
};

//Getting all supplies
exports.addSupply = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
  {
    const { supplyName } = req.body;

    supplyModel.getOne({ supplyName: {$regex: supplyName, $options:'i'}}, (err, result) => {
      if (result) {
				req.flash('error_msg', 'Already have that supply. Try again.');
				res.redirect('/supplies/add');
      } else {
        if( supplyName != ""){
          var ingredient = {
            supplyName: supplyName,
          }
        }

        supplyModel.add(ingredient, function(err, result){
          if(err){
            console.log(err);
            req.flash('error_msg', 'Could not add ingredient. Please try again.');
            res.redirect('/supplies/add');
          }
          else {
            console.log("Ingredient added!");
            res.redirect('/supplies');
            console.log(result);
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