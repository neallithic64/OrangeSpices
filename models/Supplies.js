const mongoose = require('./connection');

const supplySchema = new mongoose.Schema({
    supplyName: { type: String, required: true, min:5},
    totalSupply: { type: Number, required: true},
    brandName: { type: String, required: true, min:5},
});

const Supplies = mongoose.model('supply', supplySchema);