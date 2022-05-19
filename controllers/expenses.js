const { matchedData } = require('express-validator');
const { expensesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getItems = async (req, res) => { 
    try {
        const data = await expensesModel.find(); 
        res.send({data}); 
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
};

const createItems = async (req, res) => { 
    try {
        const body = matchedData(req); 
        const data = await expensesModel.create(body);
        res.send({data}); 
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
}; 


module.exports = { getItems, createItems }; 