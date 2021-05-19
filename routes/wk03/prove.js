const proveroutes = require('express').Router();

const controller = require('../../controllers/wk03/prove');

proveroutes
    .use('/', controller.getHomePage)

module.exports = proveroutes;