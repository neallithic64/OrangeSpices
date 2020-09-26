const { body } = require('express-validator');

const loginValidation = [
  // Username should not be empty
  body('username').not().isEmpty().withMessage("Please enter username."),
  // Password should not be empty
  body('password').not().isEmpty().withMessage("Please enter password.")
];

const addProductValidation = [
  // Product name should not be empty
  body('prodName').not().isEmpty().withMessage("Please enter product name."),
  // Product price should not be empty
  body('prodPrice').not().isEmpty().withMessage("Please enter product price."),
]

const addSupplyValidation = [
  // Brand should not be empty
  body('supplyBrand').not().isEmpty().withMessage("Please enter brand."),
  // Unit quantity should not be empty
  body('unitQty').not().isEmpty().withMessage("Please enter unit quantity."),
]

const addIngredientValidation = [
  // Ingredient name should not be empty
  body('ingredientName').not().isEmpty().withMessage("Please enter ingredient name.")
]

const addPurchaseValidation = [
  // Num items should not be empty
  body('numItems').not().isEmpty().withMessage("Please enter number of items."),
  // Num items should not be empty
  body('purchPrice').not().isEmpty().withMessage("Please enter purchase price.")
]

const purchaseOrderValidation = [
  // Supplier name should not be empty
  body('supplierName').not().isEmpty().withMessage("Please enter supplier name."),
  // Supplier email should be valid and not be empty
  body('email').not().isEmpty().withMessage("Please enter email.").isEmail().withMessage("Please enter valid email."),
  // Quantity should not be empty
  body('quantity').not().isEmpty().withMessage("Please enter quantity."),
  // Num items should not be empty
  body('numItems').not().isEmpty().withMessage("Please enter number of items.")
]

const addExpenseValidation = [
  // Expense name should not be empty
  body('expenseName').not().isEmpty().withMessage("Please enter expense name.")
]

const addExpenseDetailsValidation = [
  // Description should not be empty
  body('expenseDesc').not().isEmpty().withMessage("Please enter expense description.")
]

module.exports = { loginValidation, addProductValidation, addSupplyValidation, addIngredientValidation, 
  purchaseOrderValidation, addPurchaseValidation,  addExpenseValidation, addExpenseDetailsValidation };