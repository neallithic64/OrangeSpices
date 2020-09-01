const mongoose = require('./connection');

const algoSchema = new mongoose.Schema({
  algoName: { type: String, required: true, min:5},
});

const Algo = mongoose.model('algo', algoSchema);