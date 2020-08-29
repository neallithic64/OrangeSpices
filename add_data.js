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
    quantity: 5
  },
  {
    ingredientName: 'Pork',
    quantity: 7
  },
  {
    ingredientName: 'Chicken',
    quantity: 5
  },
  {
    ingredientName: 'Pork',
    quantity: 7
  },
  {
    ingredientName: 'Chicken',
    quantity: 5
  },
  {
    ingredientName: 'Pork',
    quantity: 7
  },
  {
    ingredientName: 'Chicken',
    quantity: 5
  },
  {
    ingredientName: 'Pork',
    quantity: 7
  },
    {
    ingredientName: 'Chicken',
    quantity: 5
  },
  {
    ingredientName: 'Pork',
    quantity: 7
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

populate1();
populate2();
populate3();
populate4();

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
    quantity: ingredientArray[0].quantity

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
    quantity: ingredientArray[1].quantity
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
    quantity: ingredientArray[2].quantity
  };
  const ing2 = {
    ingredientName: ingredientArray[3].ingredientName,
    quantity: ingredientArray[3].quantity
  };
  const ing3 = {
    ingredientName: ingredientArray[4].ingredientName,
    quantity: ingredientArray[4].quantity
  };
  const ing4 = {
    ingredientName: ingredientArray[5].ingredientName,
    quantity: ingredientArray[5].quantity
  };
  const ing5 = {
    ingredientName: ingredientArray[6].ingredientName,
    quantity: ingredientArray[6].quantity
  };
  const ing6 = {
    ingredientName: ingredientArray[7].ingredientName,
    quantity: ingredientArray[7].quantity
  };
  const ing7 = {
    ingredientName: ingredientArray[8].ingredientName,
    quantity: ingredientArray[8].quantity
  };
  const ing8 = {
    ingredientName: ingredientArray[9].ingredientName,
    quantity: ingredientArray[9].quantity
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