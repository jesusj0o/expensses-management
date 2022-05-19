const {check} = require('express-validator'); 
const validationResults = require('../utils/handleValidators'); 

const validatorLogin = [
    check('password').exists().notEmpty().isLength({min: 3, max: 20}), 
    check('email').exists().notEmpty().isEmail(),
    (req, res, next) => {
        return validationResults(req, res, next); 
    }
]

const validatorRegister = [
    check('name').exists().notEmpty().isLength({min: 3, max: 99}),
    check('lastname').exists().notEmpty().isLength({min: 2, max: 99}), 
    check('password').exists().notEmpty().isLength({min: 8, max: 15}), 
    check('email').exists().notEmpty().isEmail(), 
    (req, res, next) => { 
        return validationResults(req, res, next); 
    }
]



module.exports = {validatorLogin, validatorRegister}; 