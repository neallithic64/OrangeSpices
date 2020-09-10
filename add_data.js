const userModel = require('./models/Users');
const ingredientModel = require('./models/Ingredients');
const unitModel = require('./models/Unit');
const bcrypt = require('bcrypt');  

// Users
var userArray = [
  {
    username: 'admin',
    password: 'admin',
    userType: 'Admin'
  },
  {
    username: 'staff',
    password: 'orange&spices',
    userType: 'Staff'
  }
];

// Units
var unitArray = [
  {
    unitName: 'grams',
  },
  {
    unitName: 'pieces',
  },
  {
    unitName: 'teaspoon',
  },
  {
    unitName: 'liter',
  },
  {
    unitName: 'cups',
  },
  {
    unitName: 'tablespoon',
  },
];

populate1(); // users
populate2(); // units

function populate1(){
  const saltRounds = 10;
  const user1 = {
    username: userArray[0].username,
    password: userArray[0].password,
    userType: userArray[0].userType
  };

  bcrypt.hash(userArray[0].password, saltRounds, (err, hashed) => {
    user1.password = hashed;
    userModel.create(user1, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  const user2 = {
    email: userArray[1].email,
    username: userArray[1].username,
    password: userArray[1].password,
    userType: userArray[1].userType
  };

  bcrypt.hash(userArray[1].password, saltRounds, (err, hashed) => {
    user2.password = hashed;
    userModel.create(user2, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
}

function populate2(){
  const unit1 = {
    unitName: unitArray[0].unitName
  };
  const unit2 = {
    unitName: unitArray[1].unitName
  };
  const unit3 = {
    unitName: unitArray[2].unitName
  };
  const unit4 = {
    unitName: unitArray[3].unitName
  };
  const unit5 = {
    unitName: unitArray[4].unitName
  };
  const unit6 = {
    unitName: unitArray[5].unitName
  };

  unitModel.addUnit(unit1, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
  unitModel.addUnit(unit2, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
  unitModel.addUnit(unit3, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
  unitModel.addUnit(unit4, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
  unitModel.addUnit(unit5, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
  unitModel.addUnit(unit6, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
}