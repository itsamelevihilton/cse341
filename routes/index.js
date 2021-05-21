const routes = require('express').Router();

const defaultController = require('../controllers');

const wk02routes = require('./wk02');
const wk03routes = require('./wk03');
const wk04routes = require('./wk04');
const wk05routes = require('./wk05');
const aboutMeRoutes = require('./aboutme');

routes
    .use('/aboutme', aboutMeRoutes)
    .use('/wk02', wk02routes)
    .use('/wk03', wk03routes)
    .use('/wk04', wk04routes)
    .use('/wk05', wk05routes)
    .get('/', defaultController.getHomePage)
    .use(defaultController.get404Page)

module.exports = routes;