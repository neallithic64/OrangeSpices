const userModel = require('./models/Users');
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

populate1();
populate2();

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
}