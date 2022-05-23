const express = require('express'); 
const router = express.Router(); 
const {
    getItems, 
    getItem,
    createItems
} = require("../controllers/expenses");

const { validatorCreateExpenses, validatorGetItem } = require("../validators/expenses");
const authMiddleware = require("../middlewares/session"); 

//TODO get all items 
router.get("/", getItems); 

//TODO get only one item by id 
router.get("/:id", validatorGetItem, getItem )

//TODO Create items 
router.post("/", validatorCreateExpenses ,createItems)



module.exports = router;