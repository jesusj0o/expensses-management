const mongoose = require('mongoose'); 
const expensesScheme = new mongoose.Schema(
    {
        description: { 
            type: String
        }, 
        quantity: { 
            type: Number
        }, 
        date: { 
            type: String
        }, 
        category: { 
            type: ["fixed", "needs", "eventual", "small exprenses"]
        }
    }
); 
module.exports = mongoose.model("expenses", expensesScheme);     