const dF = require('../../utils/dateFormatter');
const Product = require('../../models/wk03/prove/product');
const User = require('../../models/wk03/prove/user');

let storeLinks = [
    {
        title: 'Products',
        path: '/wk03/prove/products'
    },
    {
        title: 'Users',
        path: '/wk03/prove/users'
    }
]

exports.getHomePage = (req, res, next) => {
    res.render('pages/wk03/prove', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        storeLinks: storeLinks,
        title: 'WK 03 Inventory',
        description: 'Here are a bunch of wares.',
        modified: dF.getModifiedDate('./views/pages/wk03/prove/index.ejs'),
        path: '/wk03/prove'
    });
};

exports.getAllProducts = (req, res, next) => {
    res.render('pages/wk03/prove/products', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        storeLinks: storeLinks,
        products: Product.fetchAll(),
        title: 'WK 03 Inventory',
        description: 'Here are a bunch of wares.',
        modified: dF.getModifiedDate('./views/pages/wk03/prove/products.ejs'),
        path: '/wk03/prove/products'
    });
}

exports.getSingleProduct = (req, res, next) => {
    let product = Product.fetchById(req.params.id);
    res.render('pages/wk03/prove/product', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        storeLinks: storeLinks,
        product: product,
        title: `CSE 341 | ${product.name}`,
        description: 'Here are a bunch of wares.',
        modified: dF.getModifiedDate('./views/pages/wk03/prove/product.ejs'),
        path: `/wk03/prove/products/${req.params.id}`
    });
}

exports.getAllUsers = (req, res, next) => {
    res.render('pages/wk03/prove/users', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        storeLinks: storeLinks,
        users: User.fetchAll(),
        title: 'WK 03 Users',
        description: 'A list of our Users',
        modified: dF.getModifiedDate('./views/pages/wk03/prove/users.ejs'),
        path: '/wk03/prove/users'
    });
}