const dF = require('../../utils/dateFormatter');

var books = [];

exports.postDisplayBook = (req, res, next) => {
    var booknum = req.body.index;
    res.render('pages/wk02/prove/displayBook', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk02,
        description: 'A book title along with it\'s summary',
        title: `${books[booknum].title} View`,
        path: '/wk02/prove',
        modified: dF.getModifiedDate('./views/pages/wk02/prove/displayBook.ejs'),
        book: books[booknum],
        index: booknum
    });
};

exports.postDeleteBook = (req, res, next) => {
    var booknum = req.body.index;
    books.splice(booknum, 1);
    next();
};

exports.postAddBook = (req, res, next) => {
    var newbook = {
        title: req.body.title,
        summary: req.body.summary
    }
    books.push(newbook);
    next();
};

exports.getInputPage = (req, res, next) => {
    res.render('pages/wk02/prove/input', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk02,
        title: 'Input Book',
        description: 'A place to input your books ',
        modified: dF.getModifiedDate('./views/pages/wk02/prove/input.ejs'),
        path: '/wk02/prove'
    });
};

exports.getBookListPage = (req, res, next) => {
    res.render('pages/wk02/prove/list', {
        links: req.app.locals.links,
        secondaryLinks: req.app.locals.secondaryLinks.wk02,
        title: 'Book List',
        description: 'A list of the current books that are loaded',
        path: '/wk02/prove',
        modified: dF.getModifiedDate('./views/pages/wk02/prove/list.ejs'),
        books: books
    });
};
