const dF = require('../../../utils/dateFormatter');


exports.getHomePage = (req, res, next) => {

    res.render('pages/wk04/prove', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk04,
        storeLinks: res.locals.storeLinks,
        profileLinks: res.locals.profileLinks,
        title: 'WK 04 Store',
        description: 'Here are a bunch of wares.',
        modified: dF.getModifiedDate('./views/pages/wk04/prove/index.ejs'),
        path: '/wk04/prove'
    });
};

