const router = require('express').Router();
const userController = require('../controllers/userController');
const billingController = require('../controllers/billingController');
const unitController = require('../controllers/unitController');
const productController = require('../controllers/productController');
const supplyController = require('../controllers/supplyController');
const discrepancyController = require('../controllers/discrepancyController');
const ingredientController = require('../controllers/ingredientController');
const purchaseController = require('../controllers/purchaseController');
const expenseController = require('../controllers/expenseController');
const expenseDetailsController = require('../controllers/expenseDetailsController');
const { loginValidation, addProductValidation, addSupplyValidation, addIngredientValidation, 
        addPurchaseValidation, purchaseOrderValidation, addExpenseValidation, addExpenseDetailsValidation } = require('../validators.js');
const { loggedIn } = require('../middlewares/checkAuth');

router.get('/', (req, res) => {
  res.redirect('/login');
});

// Get login page
router.get('/login', (req, res) => {
  if (req.session.user) res.redirect('/POS');
  else {
    console.log("Read login successful!");
    res.render('login');
  }
});

// Get POS [landing] page
router.get('/POS', loggedIn, (req, res) => {
  console.log("Read POS successful!");
  userController.getID(req.session.user, user => {
    productController.getAlaCarte(req, alaCarte => {
      productController.getChickenRiceMeal(req, CRM => {
        productController.getPorkRiceMeal(req, PRM => {
          productController.getBeefRiceMeal(req, BRM => {
            productController.getAllDayBreakfast(req, ADB => {
              productController.getBakedSpaghetti(req, BSPAG => {
                productController.getBakedSushi(req, BSUSH => {
                  productController.getAllProducts (req, ALL => {
                    billingController.getAllOrders(req, orders => {
                      if(req.session.username == "admin"){
                        res.render('POS', {
                          isAdmin: true,
                          username: req.session.username,
                          alaCarte: alaCarte,
                          CRM: CRM,
                          PRM: PRM,
                          BRM: BRM,
                          ADB: ADB,
                          BSPAG: BSPAG,
                          BSUSH: BSUSH,
                          ALL: ALL,
                          order: orders
                        })
                      }
                      else {
                        res.render('POS', { 
                          isAdmin: false, 
                          username: req.session.username,
                          alaCarte: alaCarte,
                          CRM: CRM,
                          PRM: PRM,
                          BRM: BRM,
                          ADB: ADB,
                          BSPAG: BSPAG,
                          BSUSH: BSUSH,
                          ALL: ALL,
                          order: orders
                        })
                      }
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});

// Get products page
router.get('/products', loggedIn, (req, res) => {
  console.log("Read products successful!");
  productController.getAllProducts(req, products => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('products', { 
          isAdmin: true,
          product: products,
        })
      }
      else {
        res.render('products', { 
          isAdmin: false,
          product: products,
        })
      }
    })
  })
});

// Get create products page
router.get('/products/add', loggedIn, (req, res) => {
  console.log("Read add product successful!");
  ingredientController.getAllIngredients(req, ingredients => {
    unitController.getAllUnits(req, (units) => {
      userController.getID(req.session.user, (user) => {
        if(req.session.username == "admin"){
          res.render('addProduct', { 
            isAdmin: true,
            unit: units,
            ingName: ingredients,
          })
        }
        else {
          res.render('addProduct', { 
            isAdmin: false,
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
  supplyController.getAllSupplies(req, supplies => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('supplies', { 
          isAdmin: true,
          supply: supplies,
        })
      }
      else {
        res.render('supplies', { 
          isAdmin: false, 
          supply: supplies,
        })
      }
    })
  })
});

// Get add supply page
router.get('/supplies/add', loggedIn, (req, res) => {
  console.log("Read add supply successful!");
  ingredientController.getIngredientName(req, ingredients => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('addSupply', { 
          isAdmin: true,
          ingName: ingredients,
        })
      }
      else {
        res.render('addSupply', { 
          isAdmin: false, 
          ingName: ingredients,
        })
      }
    })
  })
});

// Get inventory [ingredients] page
router.get('/ingredients', loggedIn, (req, res) => {
  console.log("Read ingredients successful!");
  ingredientController.getAllIngredients(req, ingredients => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('ingredients', { 
          isAdmin: true,
          ingredient: ingredients,
        })
      }
      else {
        res.render('ingredients', { 
          isAdmin: false,
          ingredient: ingredients,
        })
      }
    })    
  })
});

// Get add ingredient page
router.get('/ingredients/add', loggedIn, (req, res) => {
  console.log("Read add ingredient successful!");
  unitController.getAllUnits(req, units => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('addIngredient', { 
          isAdmin: true,
          unit: units,
        })
      }
      else {
        res.render('addIngredient', { 
          isAdmin: false,
          unit: units,
        })
      }
    })
  })
});

// Get procurement page
router.get('/procurement', loggedIn, (req, res) => {
  console.log("Read procurement successful!");
  purchaseController.getAllPurchase(req, purchase => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('procurement', { 
          isAdmin: true,
          purchase: purchase
        })
      }
      else {
        res.render('procurement', { 
          isAdmin: false, 
          purchase: purchase
        })
      }
    })
  })
});

// Get add purchase page
router.get('/purchase/add', (req, res) => {
  console.log("Read add purchase successful!");
  supplyController.getSupplyName(req, supplies => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('addPurchase', { 
          isAdmin: true,
          supplyName: supplies
        })
      }
      else {
        res.render('addPurchase', { 
          isAdmin: false, 
          supplyName: supplies
        })
      }
    })
  })
});

// Get purchase order page
router.get('/purchase/order', (req, res) => {
  console.log("Read purchase order successful!");
  ingredientController.getIngredientName(req, ingredients => {
    unitController.getAllUnits(req, (units) => {
      userController.getID(req.session.user, user => {
        if(req.session.username == "admin"){
          res.render('purchaseOrder', { 
            isAdmin: true,
            ingName: ingredients,
            unit: units
          })
        }
        else {
          res.render('purchaseOrder', { 
            isAdmin: false, 
            ingName: ingredients,
            unit: units
          })
        }
      })
    })
  })
});

// Get accounting [expense details] page
router.get('/expenseDetails', loggedIn, (req, res) => {
  console.log("Read expense details successful!");
  expenseDetailsController.getAllDetails(req, details => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('expenseDetails', { 
          isAdmin: true,
          expenseDetails: details,
        })
      }
      else {
        res.render('expenseDetails', { 
          isAdmin: false, 
          expenseDetails: details,
        })
      }
    })
  })
});

// Get accounting [add expense details] page
router.get('/expenseDetails/add', loggedIn, (req, res) => {
  console.log("Read add details successful!");
  expenseController.getExpenseName(req, expense => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('addExpenseDetail', { 
          isAdmin: true,
          expenseName: expense
        })
      }
      else {
        res.render('addExpenseDetail', { 
          isAdmin: false, 
           expenseName: expense
        })
      }
    })
  })
});


// Get expense page
router.get('/expense', loggedIn, (req, res) => {
  console.log("Read expense successful!");
  expenseController.getAllExpense(req, expense => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('expense', { 
          isAdmin: true,
          expense: expense
        })
      }
      else {
        res.render('expense', { 
          isAdmin: false, 
          expense: expense
        })
      }
    })
  })
});

// Get add expense page
router.get('/expense/add', (req, res) => {
  console.log("Read add expense successful!");
  expenseController.getExpenseName(req, expense => {
    userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('addExpense', { 
          isAdmin: true,
          expenseName: expense
        })
      }
      else {
        res.render('addExpense', { 
          isAdmin: false,
          expenseName: expense
        })
      }
    })
  })
});

// Get order history report page
router.get('/order_history', (req, res) => {
  console.log("Read order history successful!");
  //expenseController.getExpenseName(req, expense => {
    //userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('orderHistory', { 
          isAdmin: true,
          //expenseName: expense
        })
      }
      else {
        res.render('orderHistory', { 
          isAdmin: false,
          //expenseName: expense
        })
      }
    //})
  //})
});

// Get sales report page
router.get('/sales_report', (req, res) => {
  console.log("Read sales report successful!");
  //expenseController.getExpenseName(req, expense => {
    //userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('salesReport', { 
          isAdmin: true,
          //expenseName: expense
        })
      }
      else {
        res.render('salesReport', { 
          isAdmin: false,
          //expenseName: expense
        })
      }
    //})
  //})
});

// Get inventory report page
router.get('/inventory_report', (req, res) => {
  console.log("Read inventory report successful!");
  //expenseController.getExpenseName(req, expense => {
    //userController.getID(req.session.user, user => {
      if(req.session.username == "admin"){
        res.render('inventoryReport', { 
          isAdmin: true,
          //expenseName: expense
        })
      }
      else {
        res.render('inventoryReport', { 
          isAdmin: false,
          //expenseName: expense
        })
      }
    //})
  //})
});

// Get  profitability page
router.get('/profitability', (req, res) => {
  console.log("Read profitability report successful!");
  //expenseController.getExpenseName(req, expense => {
    //userController.getID(req.session.user, user => {
      if(req.session.username === "admin"){
        res.render('profitability', { 
          isAdmin: true,
          //expenseName: expense
        })
      }
      else {
        res.render('profitability', { 
          isAdmin: false,
          //expenseName: expense
        })
      }
    //})
  //})
});

router.get('/getIngredients', (req, res) => {
  ingredientController.getIngredientName(req.query.name, ing => {
        console.log(ing);
        res.status(200).send(ing);
  });
});

router.get('/getSupplies', (req, res) => {
  supplyController.getSupplyName(req.query.name, supply => {
        console.log(supply);
        res.status(200).send(supply);
  });
});

router.get('/getExpense', (req, res) => {
  expenseController.getExpenseName(req.query.name, expense => {
        console.log(expense);
        res.status(200).send(expense);
  });
});

// Logout
router.get('/logout', loggedIn, userController.logoutUser);

// POST methods for form submissions
router.post('/login', loginValidation, userController.loginUser);
router.post('/products/add', loggedIn, addProductValidation, productController.addProduct);
router.post('/supplies/add', loggedIn, addSupplyValidation, supplyController.addSupply);
router.post('/ingredients/add', loggedIn, addIngredientValidation, ingredientController.addIngredient);
router.post('/purchase/add', loggedIn, addPurchaseValidation, purchaseController.addPurchase);
router.post('/purchase/order', loggedIn, purchaseOrderValidation);
router.post('/expense/add', loggedIn, addExpenseValidation, expenseController.addExpense);
router.post('/expenseDetails/add', loggedIn, addExpenseDetailsValidation, expenseDetailsController.addExpenseDetails);
router.post('/supplies/check', loggedIn, discrepancyController.checkDiscrepancy);
router.post('/billing', loggedIn, billingController.addOrder);
router.post('/checkout', loggedIn, billingController.checkout);
router.post('/cancel', loggedIn, billingController.cancel);

module.exports = router;