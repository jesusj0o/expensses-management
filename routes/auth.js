const express = require('express'); 
const { registerCtrl } = require('../controllers/auth'); 
const { validatorLogin, validatorRegister } = require('../validators/auth'); 
const router = express.Router(); 


//TODO route to sign up new user localhost:3000/api/register
router.post("/register", validatorRegister, registerCtrl); 


module.exports = router;