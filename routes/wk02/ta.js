//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const routes = require('express').Router();
const taController = require('../../controllers/wk02/ta');

routes
    .post('/addUser', taController.postAddUser)
    .post('/removeUser', taController.postRemoveUser)
    .get('/', taController.getIndexPage)


module.exports = routes;