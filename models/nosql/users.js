const mongoose = require('mongoose'); 
const userScheme = new mongoose.Schema(
    {
        name: { 
            type: String
        }, 
        lastname: { 
            type: String
        }, 
        password:{ 
            type: String, 
            select: false
        }, 
        email: { 
            type: String, 
            unique: true
        }
    }, 
    { 
        timestamps: true, 
        versionKey: false
    }
)

module.exports = mongoose.model('users', userScheme);