const dF = require('../../../utils/dateFormatter');
const User = require('../../../models/wk04/prove/user');

exports.getAllUsers = (req, res, next) => {
    res.render('pages/wk04/prove/users', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk04,
        storeLinks: res.locals.storeLinks,
        profileLinks: res.locals.profileLinks,
        users: User.fetchAll(),
        title: 'WK 04 Users',
        description: 'A list of our Users',
        modified: dF.getModifiedDate('./views/pages/wk04/prove/users.ejs'),
        path: '/wk04/prove/users'
    });
}