const router = require('express').Router();
const userController = require('../controllers/userController');
const ingredientController = require('../controllers/ingredientController');
const unitController = require('../controllers/unitController');
const supplyController = require('../controllers/supplyController');
const productController = require('../controllers/productController');
const { loginValidation } = require('../validators.js');

router.get('/', (req, res) => {
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

// Get POS [landing] page
/*
router.get('/POS', (req, res) => {
  console.log("Read POS successful!");

  res.render('ingredients');
});
*/

// Get products page
router.get('/products', (req, res) => {
  console.log("Read products successful!");
  productController.getAllProducts(req, (products) => {
    res.render('products',{
      product: products,
    });
  })
});

// Get create products page
router.get('/products/add', (req, res) => {
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
router.get('/supplies', (req, res) => {
  console.log("Read supplies successful!");

  supplyController.getAllSupplies(req, (supplies) => {
    res.render('supplies', {
      supply: supplies,
    });
  })
});

// Get add supply page
router.get('/supplies/add', (req, res) => {
  console.log("Read add supply successful!");

  unitController.getAllUnits(req, (units) => {
    ingredientController.getIngredientName(req, (ingredients) => {
      //console.log("ingredients:");
      //console.log(ingredients);
      res.render('addSupply',{
        ingName: ingredients,
        unit: units,
      });
    })
  })
});

// Get inventory [ingredients] page
router.get('/ingredients', (req, res) => {
  console.log("Read ingredients successful!");

  ingredientController.getAllIngredients(req, (ingredients) => {
    res.render('ingredients',{
      ingredient: ingredients,
    });
  })
});

// Get add ingredient page
router.get('/ingredients/add', (req, res) => {
  console.log("Read add ingredient successful!");

  unitController.getAllUnits(req, (units) => {
    res.render('addIngredient',{
      unit: units,
    });
  })
});

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
router.post('/ingredients/add', ingredientController.addIngredient);
router.post('/products/add', productController.addProduct);

module.exports = router;