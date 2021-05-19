const dF = require('../utils/dateFormatter');

exports.getAboutMe = (req, res, next) => {
    res.render('pages/aboutme', {
        links: req.app.locals.links,
        secondaryLinks:[],
        title: 'About Me - Levi Hilton',
        description: 'A small description of Levi Hilton',
        modified: dF.getModifiedDate('./views/pages/aboutme.ejs'),
        path: '/aboutme'
    });
}