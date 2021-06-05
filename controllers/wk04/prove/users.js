const dF = require('../../../utils/dateFormatter');
const User = require('../../../models/wk04/prove/user');
const Order = require('../../../models/wk04/prove/order');


exports.getLoginPage = (req, res, next) => {
    res.render('pages/wk04/prove/store/login', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk04,
        storeLinks: res.locals.storeLinks,
        profileLinks: res.locals.profileLinks,
        title: `Login | CSE 341`,
        description: 'Add a new product to the store',
        modified: dF.getModifiedDate('./views/pages/wk04/prove/store/login.ejs'),
        path: `/wk04/prove/login/`
    });
}
exports.postLogin = (req, res, next) => {

}

exports.getRegisterPage = (req, res, next) => {

}
exports.postRegister = (req, res, next) => {
    const user = new User({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email, 
        password: req.body.password,
        cart: []
    });
    user
        .save()
        .then(result => {
            console.log('Created User', product);
            res.redirect('/wk04/prove/user');
        })
}
exports.postUpdateUser = (req, res, next) => {
    
}

exports.getCart = (req, res, next) => {
    req.user.populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            res.render('pages/wk04/prove/store/cart', {
                links: req.app.locals.links,
                secondaryLinks: req.app.locals.secondaryLinks.wk04,
                storeLinks: res.locals.storeLinks,
                profileLinks: res.locals.profileLinks,
                products: user.cart.items,
                title: `Cart | CSE 341`,
                description: 'Here is your user\'s cart',
                modified: dF.getModifiedDate('./views/pages/wk04/prove/store/cart.ejs'),
                path: `/wk04/prove/cart/`
            });
        })
}
exports.postAddToCart = (req, res, next) => {
    const quantity = req.params.quantity;
    const productId = req.params.productId;
    Product.findById(productId)
        .then(product => {
            return req.user.addToCart(product, quantity);
        })
        .then(result => {
            console.log('Added item to cart: ', result);
            res.redirect('/wk04/prove/cart');
        })
        .catch(err => {
            console.error(err);
        })
}
exports.postDeleteFromCart = (req, res, next) => {
    const productId = req.body.productId;
    req.user.deleteFromCart()
        .then(result => {
            console.log('Deleted product from cart: ', result);
            res.redirect('/wk04/prove/cart');
        })
        .catch(err => console.error(err));
}
exports.postUpdateCartQuantity = (req, res, next) => {
    const productId = req.body.productId;
    const newQuantity = req.body.quantity;
    Product.findById(productId)
        .then(product => {
            return req.user.updateCartQuantity(product, newQuantity);
        })
        .then(result => {
            console.log("Updated cart quantity: ", result);
            res.redirect('/wk04/prove/cart');
        })
        .catch(err => {
            console.error(err);
        })
}

exports.getOrdersPage = (req, res, next) => {

}
exports.postAddOrder = (req, res, next) => {
    const order = new Order({
        user: req.user,
        products: req.user.cart.items
    })
    order.save()
        .then(result => {
            console.log('New order created: ', result);
            res.redirect('/wk04/prove/orders');
        })
        .catch(err => {
            console.error(err);
        })
}
