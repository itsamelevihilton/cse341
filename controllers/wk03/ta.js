const fs = require('fs');
const Product = require('../../models/wk03/ta/product');
const dF = require('../../utils/dateFormatter');

exports.getSearchItem = (req, res, next) => {
    let localitems = Product.fetchAllProducts();
    res.render('pages/wk03/ta', { 
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        title: 'Team Activity 03', 
        description: 'This is a quick item page after having searched a parameter',
        modified: dF.getModifiedDate('./views/pages/wk03/ta/index.ejs'),
        path: '/wk03/ta',
        items: Product.searchTags(req.params.search)
    });
};
exports.getAllItems = (req, res, next) => {
    res.render('pages/wk03/ta', { 
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        title: 'Team Activity 03', 
        path: '/wk03/ta',
        description: 'This is a list of all of our products',
        modified: dF.getModifiedDate('./views/pages/wk03/ta/index.ejs'),
        items: Product.fetchAllProducts()
    });
}