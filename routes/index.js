const router = require('express').Router();
const userController = require('../controllers/userController');
const ingredientController = require('../controllers/ingredientController');
const unitController = require('../controllers/unitController');
const supplyController = require('../controllers/supplyController');
const productController = require('../controllers/productController');
const { loginValidation } = require('../validators.js');
const { loggedIn, loggedOut } = require('../middlewares/checkAuth');

router.get('/', (req, res) => {
  res.redirect('/login');
});

// Get login page
router.get('/login', loggedOut, (req, res) => {
  console.log("Read login successful!");
  res.render('login');
});

// Get POS [landing] page
router.get('/POS', loggedIn, (req, res) => {
  console.log("Read POS successful!");

  var owner; 
  userController.getID(req.session.user, (user) => {
    owner = user;
    res.render('POS', { 
      userType: req.session.username, 
      //dp: owner.dp,
      _id: req.session.user
    })
  });
});


// Get products page
router.get('/products', loggedIn, (req, res) => {
  console.log("Read products successful!");
  productController.getAllProducts(req, (products) => {
    res.render('products',{
      product: products,
    });
  })
});

// Get create products page
router.get('/products/add', loggedIn, (req, res) => {
  console.log("Read add product successful!");
  ingredientController.getAllIngredients(req, (ingredients) => {
    unitController.getAllUnits(req, (units) => {
      res.render('addProduct',{
        unit: units,
        ingName: ingredients,
      });
    })
  })
});

// Get inventory [supplies] page
router.get('/supplies', loggedIn, (req, res) => {
  console.log("Read supplies successful!");
  supplyController.getAllSupplies(req, (supplies) => {
    res.render('supplies', {
      supply: supplies,
    });
  })
});

// Get add supply page
router.get('/supplies/add', loggedIn, (req, res) => {
  console.log("Read add supply successful!");
  ingredientController.getIngredientName(req, (ingredients) => {
    res.render('addSupply',{
      ingName: ingredients,
    });
  })
});

// Get inventory [ingredients] page
router.get('/ingredients', loggedIn, (req, res) => {
  console.log("Read ingredients successful!");

  ingredientController.getAllIngredients(req, (ingredients) => {
    res.render('ingredients',{
      ingredient: ingredients,
    });
  })
});

// Get add ingredient page
router.get('/ingredients/add', loggedIn, (req, res) => {
  console.log("Read add ingredient successful!");

  unitController.getAllUnits(req, (units) => {
    res.render('addIngredient',{
      unit: units,
    });
  })
});

// Get procurement page
router.get('/procurement', loggedIn, (req, res) => {
  console.log("Read procurement successful!");
  res.render('procurement');
});

// Get add purchase page
/*
router.get('/purchase/add', (req, res) => {
  console.log("Read add purchase successful!");

  unitController.getAllUnits(req, (units) => {
    res.render('addPurchase',{
      unit: units,
    });
  })
});
*/
// Get accounting page
router.get('/accounting', loggedIn, (req, res) => {
  console.log("Read accounting successful!");
  res.render('accounting');
});

// Logout
router.get('/logout', loggedIn, userController.logoutUser);

// POST methods for form submissions
router.post('/login', loggedOut, loginValidation, userController.loginUser);
router.post('/supplies/add', loggedIn, supplyController.addSupply);
router.post('/ingredients/add', loggedIn, ingredientController.addIngredient);
router.post('/products/add', loggedIn, productController.addProduct);

module.exports = router;