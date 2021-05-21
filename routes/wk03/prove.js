const proveroutes = require('express').Router();

const controller = require('../../controllers/wk03/prove');

proveroutes
    .use('/users', controller.getAllUsers)
    .use('/products/:id', controller.getSingleProduct)
    .use('/products', controller.getAllProducts)
    .use('/', controller.getHomePage)

module.exports = proveroutes;