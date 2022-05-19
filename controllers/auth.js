const { matchedData } = require('express-validator');
const { tokenSign} = require('../utils/handleJtw');
const { encrypt } = require('../utils/handlePassword'); 
const { handleHttpError } = require('../utils/handleError');
const { userModel } = require('../models/'); 
const { compare } = require('bcryptjs'); 

//TODO this controller sign up a new user 
const registerCtrl = async (req, res) => { 
    try {
        req = matchedData(req); 
        const passwordHash = await encrypt(req.password); 
        const body = {...req, password: passwordHash}; 
        const dataUser = await userModel.create(body); 

        dataUser.set('password', undefined, {strict: false}); 
        const data = { 
            token: await tokenSign(dataUser), 
            user: dataUser
        }; 
        res.send({data}); 
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_REGISTER_USER'); 
    }
}

module.exports = {registerCtrl};