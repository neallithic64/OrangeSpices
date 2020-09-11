const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, min:5},
  password: { type: String, required: true, min:5},
  isAdmin: { type: Boolean, required: false},
});

const User = mongoose.model('users', userSchema);

// Create user
exports.create = function(obj, next) {
    const user = new User(obj);
    user.save(function(err, user) {
      next(err, user);
    });
};

// Getting all users
exports.getAll = function(next){
    User.find({},function(err, result) {
      const users = [];
      result.forEach(function(user){
        users.push(user.toObject());
      });
      next(err, users);
    });
};

// Retrieving just ONE user based on a query
exports.getOne = function(query, next) {
  User.findOne(query, function(err, user) {
    next(err, user);
  });
};

// Retrieving a user based on ID
exports.getById = function(id, next) {
  User.findById(id, function(err, user) {
    next(err, user);
  });
};

// Edit/Update
exports.update = function(id, update, next) {
    User.findOneAndUpdate({_id: id}, update, { new: true }, function(err, post) {
      next(err, post);
    })
};