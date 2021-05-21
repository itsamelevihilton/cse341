const dF = require('../../utils/dateFormatter');

let storeLinks = [
    {
        title: 'Products',
        path: '/wk05/prove/products'
    },
    {
        title: 'Users',
        path: '/wk05/prove/users'
    }
]

exports.getHomePage = (req, res, next) => {
    res.render('pages/wk05/prove', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk05,
        storeLinks: storeLinks,
        title: 'WK 05',
        description: 'Here are a bunch of wares.',
        modified: dF.getModifiedDate('./views/pages/wk05/prove/index.ejs'),
        path: '/wk05/prove'
    });
};