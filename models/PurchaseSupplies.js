const mongoose = require('./connection');

const purchaseSupplySchema = new mongoose.Schema({
  purchaseDate: { type: Date, required: true },
  supplyID: { type: mongoose.Schema.Types.ObjectId, ref: 'supply', required: true }, 
  purchaseQty: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  purchasePrice: { type: Number, required: true },
  totalPrice: { type: Number, required: false }
});

const Purchase = mongoose.model('purchase', purchaseSupplySchema);

// Add purchase
exports.add = function(obj, next) {
  const purchase = new Purchase(obj);
    purchase.save(function(err, purchase) {
      next(err, purchase);
    });
};

// Get all purchases
exports.getAll = (param, next) => {
  Purchase.find({}).populate('supplyID').exec((err, purchase) => next(err, purchase));
};