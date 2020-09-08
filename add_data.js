const userModel = require('./models/Users');
const ingredientModel = require('./models/Ingredients');
const unitModel = require('./models/Unit');
const bcrypt = require('bcrypt');  

// Users
var userArray = [
  {
    username: 'admin',
    password: 'admin',
    userType: 'admin'
  },
  {
    username: 'staff',
    password: 'orange&spices',
    userType: 'staff'
  }
];

// Ingredients
var ingredientArray = [
  {
    ingredientName: 'Chicken',
    totalQuantity: 5
  },
  {
    ingredientName: 'Pork',
    totalQuantity: 7
  },
  {
    ingredientName: 'Beef',
    totalQuantity: 10
  },
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

populate1(); // users and sample ingredients
populate2(); // users and sample ingredients
populate3(); // units
populate4(); // more ingredients sample

function populate1(){
  const saltRounds = 10;
  const user = {
    username: userArray[0].username,
    password: userArray[0].password,
    userType: userArray[0].userType
  };

  bcrypt.hash(userArray[0].password, saltRounds, (err, hashed) => {
    user.password = hashed;
    userModel.create(user, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  const ingredient = {
    ingredientName: ingredientArray[0].ingredientName,
    totalQuantity: ingredientArray[0].totalQuantity

  };

  ingredientModel.add(ingredient, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
}

function populate2(){
  const saltRounds = 10;
  const user = {
    email: userArray[1].email,
    username: userArray[1].username,
    password: userArray[1].password,
    userType: userArray[1].userType
  };

  bcrypt.hash(userArray[1].password, saltRounds, (err, hashed) => {
    user.password = hashed;
    userModel.create(user, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  const ingredient = {
    ingredientName: ingredientArray[1].ingredientName,
    totalQuantity: ingredientArray[1].totalQuantity
  };

  ingredientModel.add(ingredient, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
}

function populate3(){
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

function populate4(){
  const ing1 = {
    ingredientName: ingredientArray[2].ingredientName,
    totalQuantity: ingredientArray[2].totalQuantity
  };


  ingredientModel.add(ing1, function(err, result) {
    if (err) throw err;
    console.log(result);
  })


}