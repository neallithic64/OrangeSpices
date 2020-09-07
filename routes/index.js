const router = require('express').Router();
const userController = require('../controllers/userController');
const ingredientController = require('../controllers/ingredientController');
const { loginValidation } = require('../validators.js');

router.get('/', (req, res) =>{
  res.redirect('/login');
});

// Get login page
router.get('/login', (req, res) => {
  console.log("Read login successful!");
  res.render('login');
});

// Get category page [admin]
router.get('/category/admin', (req, res) => {
  console.log("Read category (admin) successful!");
  res.render('categoryAdmin',{
    username: req.session.username
  });
});

// Get category page [staff]
router.get('/category/staff', (req, res) => {
  console.log("Read category (staff) successful!");
  //res.render('categoryAdmin',{
  //  username: req.session.username
  //});
});

// Get POS page
/*
router.get('/pos', (req, res) => {
  console.log("Read pos successful!");

  res.render('ingredients');
});
*/

// Get products page
router.get('/products', (req, res) => {
  console.log("Read products successful!");
  res.render('products');
});

// Get inventory [ingredients] page
router.get('/ingredients', (req, res) => {
  console.log("Read ingredients successful!");

  ingredientController.getAllIngredients(req, (ingredients) => {
    res.render('ingredients',{
      item: ingredients,
    });
  })
});

// Get inventory [supplies] page
/*
router.get('/supplies', (req, res) => {
  console.log("Read supplies successful!");

    res.render('supplies');
  })
});
*/

// Get procurement page
router.get('/procurement', (req, res) => {
  console.log("Read procurement successful!");
  res.render('procurement');
});

// Get accounting page
router.get('/accounting', (req, res) => {
  console.log("Read accounting successful!");
  res.render('accounting');
});

// Logout
router.get('/logout', userController.logoutUser);

// POST methods for form submissions
router.post('/login', loginValidation, userController.loginUser);

module.exports = router;