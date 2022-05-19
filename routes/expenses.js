const express = require('express'); 
const router = express.Router(); 

const {
    getItems, 
    createItems
} = require("../controllers/expenses");

const { validatorCreateExpenses } = require("../validators/expenses");

//Get all items 
router.get("/", getItems); 

//Create items 
router.post("/", validatorCreateExpenses ,createItems)

module.exports = router;