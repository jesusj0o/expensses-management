const express = require('express'); 
const { registerCtrl, loginCtrl } = require('../controllers/auth'); 
const { validatorLogin, validatorRegister } = require('../validators/auth'); 
const router = express.Router(); 


//TODO route to sign up new user localhost:3000/api/register
router.post("/register", validatorRegister, registerCtrl); 

//TODO route to sign in user 
router.post('/login', validatorLogin, loginCtrl)

module.exports = router;