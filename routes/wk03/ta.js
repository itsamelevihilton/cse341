//TA03 PLACEHOLDER
const routes = require('express').Router();

const controller = require('../../controllers/wk03/ta');

routes
    .get('/:search', controller.getSearchItem)
    .get('/', controller.getAllItems)

module.exports = routes;