const { body } = require('express-validator');

const loginValidation = [
  // Username should not be empty
  body('username').not().isEmpty().withMessage("Please enter username."),
  // Password should not be empty
  body('password').not().isEmpty().withMessage("Please enter password.")
];

const addSupplyValidation = [
  // Brand should not be empty
  body('supplyBrand').not().isEmpty().withMessage("Please enter brand."),
  // Unit quantity should not be empty
  body('unitQty').not().isEmpty().withMessage("Please enter unit quantity."),
]

const addIngredientValidation = [
  // Ingredient name should not be empty
  body('ingredientName').not().isEmpty().withMessage("Please enter ingredient name."),
]

const addPurchaseValidation = [

]

module.exports = { loginValidation, addSupplyValidation, addIngredientValidation, addPurchaseValidation };