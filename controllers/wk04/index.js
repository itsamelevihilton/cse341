const { resolveInclude } = require("ejs");
const User = require("../../models/wk04/prove/user.js");

exports.useHardCodedUser = (req, res, next) => {
    User.findById("60b928867f693659ff3d0a7c")
        .then(user => {
            req.user = new User(user.first, user.last, user.email, user.password, user.cart, user.id);
            next();
        })
        .catch(err => console.error(err));
}

exports.setupStoreLinks = (req, res, next) => {
    // This function should determine if they are logged in and setup the links appropriately
    const isLoggedIn = true;
    const isAdmin = true;
    res.locals.profileLinks = [
        {
            title: 'Cart',
            path: '/wk04/prove/products'
        }
    ]
    res.locals.storeLinks = [
        {
            title: 'Products',
            path: '/wk04/prove/products'
        }
    ]
    if (isLoggedIn) {
        res.locals.storeLinks.push({
            title: 'Add Product',
            path: '/wk04/prove/add-product'
        })
        res.locals.storeLinks.push({
            title: 'Cart',
            path: '/wk04/prove/cart'
        })
        res.locals.profileLinks.push({
            title: 'Profile',
            path: '/wk04/prove/profile'
        })
        res.locals.profileLinks.push({
            title: 'Logout',
            path: '/wk04/prove/logout'
        })
    }
    // Uncomment this else statement for production 
    // else {
        res.locals.profileLinks.push({
            title: 'Login',
            path: '/wk04/prove/login'
        })
        res.locals.profileLinks.push({
            title: 'Register',
            path: '/wk04/prove/register'
        })
    // }
    if (isAdmin) {
        res.locals.storeLinks.push({
            title: 'All Users',
            path: '/wk04/prove/users'
        })
    }
    next();
}

exports.redirectToProve = (req, res, next) => {
    res.redirect('/wk04/prove');
}