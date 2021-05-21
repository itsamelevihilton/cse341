const dF = require('../../utils/dateFormatter');

exports.initializeVars = (req, res, next) => {
    if (!req.session.style) {
        req.session.style = 'light';
    }
    if (req.session.counter == null) {
        req.session.counter = 1
    }
    return next();
}
exports.getMainPage = (req, res, next) => { 
    res.render('pages/wk05/ta', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk05,
        title: 'Team Activity 05',
        path: '/wk05/ta',
        style: req.session.style,
        counter: req.session.counter,
        description: 'This is testing session variables',
        modified: dF.getModifiedDate('./views/pages/wk05/ta/index.ejs')
    })
}
exports.changeStyle = (req, res, next) => {
    console.log("new style: ", req.params.style);
    req.session.style = req.params.style
    res.redirect('/wk05/ta');
}
exports.changeCounter = (req, res, next) => {
    if (req.params.action === 'add') {
        req.session.counter++;
    } else {
        req.session.counter--;
    }
    res.redirect('/wk05/ta');
}