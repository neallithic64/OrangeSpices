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
    ingredientName: 'Chicken',
    totalQuantity: 5
  },
  {
    ingredientName: 'Pork',
    totalQuantity: 7
  },
  {
    ingredientName: 'Chicken',
    totalQuantity: 5
  },
  {
    ingredientName: 'Pork',
    totalQuantity: 7
  },
  {
    ingredientName: 'Chicken',
    totalQuantity: 5
  },
  {
    ingredientName: 'Pork',
    totalQuantity: 7
  },
    {
    ingredientName: 'Chicken',
    totalQuantity: 5
  },
  {
    ingredientName: 'Pork',
    totalQuantity: 7
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

  ingredientModel.addIngredient(ingredient, function(err, result) {
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

  ingredientModel.addIngredient(ingredient, function(err, result) {
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
}

function populate4(){
  const ing1 = {
    ingredientName: ingredientArray[2].ingredientName,
    totalQuantity: ingredientArray[2].totalQuantity
  };
  const ing2 = {
    ingredientName: ingredientArray[3].ingredientName,
    totalQuantity: ingredientArray[3].totalQuantity
  };
  const ing3 = {
    ingredientName: ingredientArray[4].ingredientName,
    totalQuantity: ingredientArray[4].totalQuantity
  };
  const ing4 = {
    ingredientName: ingredientArray[5].ingredientName,
    totalQuantity: ingredientArray[5].totalQuantity
  };
  const ing5 = {
    ingredientName: ingredientArray[6].ingredientName,
    totalQuantity: ingredientArray[6].totalQuantity
  };
  const ing6 = {
    ingredientName: ingredientArray[7].ingredientName,
    totalQuantity: ingredientArray[7].totalQuantity
  };
  const ing7 = {
    ingredientName: ingredientArray[8].ingredientName,
    totalQuantity: ingredientArray[8].totalQuantity
  };
  const ing8 = {
    ingredientName: ingredientArray[9].ingredientName,
    totalQuantity: ingredientArray[9].totalQuantity
  };

  ingredientModel.addIngredient(ing1, function(err, result) {
    if (err) throw err;
    console.log(result);
  })

  ingredientModel.addIngredient(ing2, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
  
  ingredientModel.addIngredient(ing3, function(err, result) {
    if (err) throw err;
    console.log(result);
  })

  ingredientModel.addIngredient(ing4, function(err, result) {
    if (err) throw err;
    console.log(result);
  })

  ingredientModel.addIngredient(ing5, function(err, result) {
    if (err) throw err;
    console.log(result);
  })

  ingredientModel.addIngredient(ing6, function(err, result) {
    if (err) throw err;
    console.log(result);
  })

  ingredientModel.addIngredient(ing7, function(err, result) {
    if (err) throw err;
    console.log(result);
  })

  ingredientModel.addIngredient(ing8, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
}