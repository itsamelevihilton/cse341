const proveroutes = require('express').Router();

const controller = require('../../controllers/wk04/prove/');
const productsController = require('../../controllers/wk04/prove/products');
const adminController = require('../../controllers/wk04/prove/admin');
const usersController = require('../../controllers/wk04/prove/users')

proveroutes
    // user links
    .get('/login', usersController.getLoginPage)
    .post('/login', usersController.postLogin)
    .get('/register', usersController.getRegisterPage)
    .post('/register', usersController.postRegister)
    .post('/update-user', usersController.postUpdateUser)
    .get('/cart', usersController.getCart)
    .post('/add-to-cart', usersController.postAddToCart)
    .post('/delete-from-cart', usersController.postDeleteFromCart)
    .post('/update-cart-quantity', usersController.postUpdateCartQuantity)
    .get('/orders', usersController.getOrdersPage)
    .post('/add-order', usersController.postAddOrder)
    // product links
    .get('/product/:id', productsController.getSingleProduct)
    .get('/products', productsController.getAllProducts)
    .get('/add-product', productsController.getAddProductPage)
    .post('/add-product', productsController.postAddProduct)
    .post('/delete-product', productsController.postDeleteProduct)
    .get('/edit-product/:id', productsController.getEditProduct)
    .post('/edit-product', productsController.postEditProduct)
    // admin links
    .get('/all-users', adminController.getAllUsers)
    .use('/', controller.getHomePage)

module.exports = proveroutes;