const mongoose = require('mongoose');
const databaseURL = 'mongodb+srv://admin:admin@itisdev-pos.3wffs.mongodb.net/o&sdb?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
};

mongoose.set('useCreateIndex', true);

mongoose.connect(databaseURL, options);
module.exports = mongoose;