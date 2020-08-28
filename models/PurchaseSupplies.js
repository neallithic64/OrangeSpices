const mongoose = require('./connection');

const purchaseSupplySchema = new mongoose.Schema({
  purchaseQty: { type: Number, required: true},
  purchasePrice: { type: Number, required: true},
  purchaseDate: { type: Date, required: true},
  expiryDate: { type: Date, required: true},
});

const Purchase = mongoose.model('purchase', purchaseSupplySchema);

// Create
exports.create = function(obj, next) {
  const purchase = new Purchase(obj);
    console.log(purchase);
    purchase.save(function(err, user) {
      next(err, user);
    });
}; 