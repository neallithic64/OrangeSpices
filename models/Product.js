const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
  prodName: { type: String, required: true, min:5},
  prodPrice: { type: Number, required: true },
  category: { type: String, required: true },
});

const Product = mongoose.model('product', productSchema);

// Add Product
exports.add = function(obj, next) {
  const product = new Product(obj);

  product.save(function(err, prod) {
    next(err, prod);
  });
};

// Get all products
exports.getAll = (param, next) => {
  Product.find({}, (err, prod) => {
    next(err, prod);
  });
};

// Find product
exports.getOne = function(query, next) {
  Product.findOne(query, function(err, prod) {
    next(err, prod);
  });
};

// Get product names and category
exports.getProduct = function(req, next) {
  Product.find({}, {prodName: 1, category: 1, _id:1}, function(err, product) { 
    next(err, product); 
  });
};