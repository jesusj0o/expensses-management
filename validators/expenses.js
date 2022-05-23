const {check} = require('express-validator'); 
const validateResult = require('../utils/handleValidators'); 

const validatorCreateExpenses = [
    check('description').exists().notEmpty().isLength({min: 10, max: 99}), 
    check('quantity').exists().notEmpty().isNumeric(), 
    check('date').exists().notEmpty(),
    check('category').exists().notEmpty(),
    (req, res, next) => { 
        return validateResult(req, res, next); 
    }
]

const validatorGetItem = [
    check('id').exists().notEmpty().isMongoId(), 
    (req, res, next) => { 
        return validateResult(req, res, next)
    }
]


module.exports = {validatorCreateExpenses, validatorGetItem};