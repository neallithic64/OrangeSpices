const mongoose = require('./connection');

const supplySchema = new mongoose.Schema({
    supplyName: { type: String, required: true, min:5},
    totalSupply: { type: Number, required: true},
    unitQuantity: { type: Number, required: true},
    ingredientID: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: false}, //set to true afterwards!!
    unitID: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: false}, //set to true afterwards!!
});

const Supplies = mongoose.model('supply', supplySchema);