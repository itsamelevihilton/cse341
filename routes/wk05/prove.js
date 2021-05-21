const proveroutes = require('express').Router();

const controller = require('../../controllers/wk05/prove');

proveroutes
    .use('/', controller.getHomePage)

module.exports = proveroutes;