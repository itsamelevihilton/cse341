const dF = require('../../utils/dateFormatter');

exports.getHomePage = (req, res, next) => {
    res.render('pages/wk03/prove', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk03,
        title: 'WK 03 Inventory',
        description: 'Here are a bunch of wares.',
        modified: dF.getModifiedDate('./views/pages/wk03/prove/index.ejs'),
        path: '/wk03/prove'
    });
};