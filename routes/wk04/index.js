routes = require('express').Router();

proveroutes = require('./prove');
taroutes = require('./ta');

routes
    .use('/prove', proveroutes)
    .use('/ta', taroutes)
    .use('/', (req, res, next) => {
        res.redirect('/wk04/prove');
    })

module.exports = routes;
