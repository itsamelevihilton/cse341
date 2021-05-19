const dF = require('../utils/dateFormatter');

exports.getHomePage = (req, res, next) => {
    res.render('pages/index', {
        links: req.app.locals.links,
        secondaryLinks: [],
        description: 'A portfolio for Levi Hilton to display the work he does in CSE 341',
        title: 'Levi Hilton - CSE 341 Portfolio',
        modified: dF.getModifiedDate('./views/pages/index.ejs'),
        path: '/'
    });
}

exports.get404Page = (req, res, next) => {
    res.render('pages/404', {
        links: req.app.locals.links,
        secondaryLinks: [],
        description: 'The page you were looking for was not found',
        title: '404 - Page Not Found',
        modified: dF.getModifiedDate('./views/pages/404.ejs'),
        path: req.url
    })
}