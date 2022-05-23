const { matchedData } = require('express-validator');
const { expensesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

//TODO get all the items from the data base 
const getItems = async (req, res) => { 
    try {
        const data = await expensesModel.find(); 
        res.send({data}); 
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
};

//TODO get only one item by id
const getItem = async (req, res) => { 
    try {
        req = matchedData(req); 
        const {id} = req; 
        const data = await expensesModel.findById(id); 
        res.send({data}); 
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

//TODO create a new item 
const createItems = async (req, res) => { 
    try {
        const body = matchedData(req); 
        const data = await expensesModel.create(body);
        res.send({data}); 
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
}; 


module.exports = { getItems, createItems, getItem }; 