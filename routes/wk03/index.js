routes = require('express').Router();

proveroutes = require('./prove');
taroutes = require('./ta');
controller = require('../../controllers/wk03');

routes
    .use('/prove', proveroutes)
    .use('/ta', taroutes)
    .use('/', controller.redirectToProve)

module.exports = routes;
