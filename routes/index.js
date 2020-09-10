const router = require('express').Router();
const userController = require('../controllers/userController');
const ingredientController = require('../controllers/ingredientController');
const unitController = require('../controllers/unitController');
const supplyController = require('../controllers/supplyController');
const productController = require('../controllers/productController');
const { loginValidation, addSupplyValidation } = require('../validators.js');
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
  userController.getID(req.session.user, (user) => {
    if(req.session.username == "admin"){
      res.render('POS', { 
        isAdmin: true,
        username: req.session.username, 
        _id: req.session.user
      })
    }
    else {
      res.render('POS', { 
        isAdmin: false, 
        username: req.session.username,
        _id: req.session.user
      })
    }
  })
});


// Get products page
router.get('/products', loggedIn, (req, res) => {
  console.log("Read products successful!");
  productController.getAllProducts(req, (products) => {
    userController.getID(req.session.user, (user) => {
      if(req.session.username == "admin"){
        res.render('products', { 
          isAdmin: true,
          username: req.session.username, 
          _id: req.session.user,
          product: products,
        })
      }
      else {
        res.render('products', { 
          isAdmin: false, 
          username: req.session.username,
          _id: req.session.user,
          product: products,
        })
      }
    })
  })
});

// Get create products page
router.get('/products/add', loggedIn, (req, res) => {
  console.log("Read add product successful!");

  ingredientController.getAllIngredients(req, (ingredients) => {
    unitController.getAllUnits(req, (units) => {
      userController.getID(req.session.user, (user) => {
        if(req.session.username == "admin"){
          res.render('addProduct', { 
            isAdmin: true,
            username: req.session.username, 
            _id: req.session.user,
            unit: units,
            ingName: ingredients,
          })
        }
        else {
          res.render('addProduct', { 
            isAdmin: false, 
            username: req.session.username,
            _id: req.session.user,
            unit: units,
            ingName: ingredients,
          })
        }
      })
    })
  })
});

// Get inventory [supplies] page
router.get('/supplies', loggedIn, (req, res) => {
  console.log("Read supplies successful!");
  supplyController.getAllSupplies(req, (supplies) => {
    userController.getID(req.session.user, (user) => {
      if(req.session.username == "admin"){
        res.render('supplies', { 
          isAdmin: true,
          username: req.session.username, 
          _id: req.session.user,
          supply: supplies,
        })
      }
      else {
        res.render('supplies', { 
          isAdmin: false, 
          username: req.session.username,
          _id: req.session.user,
          supply: supplies,
        })
      }
    })
  })
});

// Get add supply page
router.get('/supplies/add', loggedIn, (req, res) => {
  console.log("Read add supply successful!");
  ingredientController.getIngredientName(req, (ingredients) => {
    userController.getID(req.session.user, (user) => {
      if(req.session.username == "admin"){
        res.render('addSupply', { 
          isAdmin: true,
          username: req.session.username, 
          _id: req.session.user,
          ingName: ingredients,
        })
      }
      else {
        res.render('addSupply', { 
          isAdmin: false, 
          username: req.session.username,
          _id: req.session.user,
          ingName: ingredients,
        })
      }
    })
  })
});

// Get inventory [ingredients] page
router.get('/ingredients', loggedIn, (req, res) => {
  console.log("Read ingredients successful!");
  ingredientController.getAllIngredients(req, (ingredients) => {
    userController.getID(req.session.user, (user) => {
      if(req.session.username == "admin"){
        res.render('ingredients', { 
          isAdmin: true,
          username: req.session.username, 
          _id: req.session.user,
          ingredient: ingredients,
        })
      }
      else {
        res.render('ingredients', { 
          isAdmin: false, 
          username: req.session.username,
          _id: req.session.user,
          ingredient: ingredients,
        })
      }
    })    
  })
});

// Get add ingredient page
router.get('/ingredients/add', loggedIn, (req, res) => {
  console.log("Read add ingredient successful!");
  unitController.getAllUnits(req, (units) => {
    userController.getID(req.session.user, (user) => {
      if(req.session.username == "admin"){
        res.render('addIngredient', { 
          isAdmin: true,
          username: req.session.username, 
          _id: req.session.user,
          unit: units,
        })
      }
      else {
        res.render('addIngredient', { 
          isAdmin: false, 
          username: req.session.username,
          _id: req.session.user,
          unit: units,
        })
      }
    })
  })
});

// Get procurement page
router.get('/procurement', loggedIn, (req, res) => {
  console.log("Read procurement successful!");
  userController.getID(req.session.user, (user) => {
    if(req.session.username == "admin"){
      res.render('procurement', { 
        isAdmin: true,
        username: req.session.username, 
        _id: req.session.user,
      })
    }
    else {
      res.render('procurement', { 
        isAdmin: false, 
        username: req.session.username,
        _id: req.session.user,
      })
    }
  })
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
  userController.getID(req.session.user, (user) => {
    if(req.session.username == "admin"){
      res.render('accounting', { 
        isAdmin: true,
        username: req.session.username, 
        _id: req.session.user,
      })
    }
    else {
      res.render('accounting', { 
        isAdmin: false, 
        username: req.session.username,
        _id: req.session.user,
      })
    }
  })
});

// Logout
router.get('/logout', loggedIn, userController.logoutUser);

// POST methods for form submissions
router.post('/login', loggedOut, loginValidation, userController.loginUser);
router.post('/supplies/add', loggedIn, addSupplyValidation, supplyController.addSupply);
router.post('/ingredients/add', loggedIn, ingredientController.addIngredient);
router.post('/products/add', loggedIn, productController.addProduct);

module.exports = router;