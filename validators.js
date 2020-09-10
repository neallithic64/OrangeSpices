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

module.exports = { loginValidation, addSupplyValidation };