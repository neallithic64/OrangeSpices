const mongoose = require('./connection');

const productIngredientSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
  ingredientID: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: true },
  quantityNeeded: { type: Number, required: true },
  unitID: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: true }
});

// Declaring productID and ingredientID as pk's
productIngredientSchema.index({
    productID: 1,
    ingredientID: 1
}, { unique: true });

const ProductIngredient = mongoose.model('productIng', productIngredientSchema);