const routes = require('express').Router();
const proveController = require('../../controllers/wk02/prove');


routes
    .post('/displayBook', proveController.postDisplayBook)
    .post('/deleteBook', proveController.postDeleteBook)
    .post('/addBook', proveController.postAddBook)
    .get('/input', proveController.getInputPage)
    .use('/', proveController.getBookListPage)

module.exports = routes;
