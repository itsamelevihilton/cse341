const dF = require('../../utils/dateFormatter');

var names = [];

exports.postAddUser = (req, res, next) => {
    names.push(req.body.name);

    res.writeHead(302, {'Location': '/wk02/ta/'});
    res.end();
};

exports.postRemoveUser = (req, res, next) => {
    names.splice(names.indexOf(req.body.name),1);

    res.writeHead(302, {'Location': '/wk02/ta/'});
    res.end();
}
exports.getIndexPage = (req, res, next) => {
    res.render('pages/wk02/ta', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk02,
        description: 'The team activity for wk02',
        title: 'Team Activity | WK 02', 
        path: '/wk02/ta', 
        modified: dF.getModifiedDate('./views/pages/wk02/ta/index.ejs'),
        names: names
    });
}