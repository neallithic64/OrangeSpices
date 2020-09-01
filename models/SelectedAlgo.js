const mongoose = require('./connection');

const selectedAlgoSchema = new mongoose.Schema({
    dateSelected: { type: Date, required: true},
    algoID: { type: mongoose.Schema.Types.ObjectId, ref: 'algo', required: false}, //set to true afterwards!!
});

const SelectedAlgo = mongoose.model('supply', selectedAlgoSchema);