routes = require('express').Router();

proveroutes = require('./prove');
taroutes = require('./ta');
controller = require('../../controllers/wk04');

routes
    .use(controller.setupStoreLinks)
    .use(controller.useHardCodedUser)
    .use('/prove', proveroutes)
    .use('/ta', taroutes)
    .use('/', controller.redirectToProve);

module.exports = routes;
