const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
    prodName: { type: String, required: true, min:5},
    prodPrice: { type: Number, required: true},
});

const Product = mongoose.model('product', productSchema);

// Add Product
exports.addProduct = function(obj, next) {
    const product = new Product(obj);
    //console.log(product);
    product.save(function(err, prod) {
      next(err, prod);
    });
};
