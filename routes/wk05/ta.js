const routes = require('express').Router();

const controller = require('../../controllers/wk05/ta');

routes
    .use('/', controller.initializeVars)
    .post('/change-style', controller.changeStyle)
    .post('/counter', controller.changeCounter)
    .use('/', controller.getMainPage)

module.exports = routes; 