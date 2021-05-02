const express = require('express');
const router = express.Router();

var books = [];

router.get('/list', (req, res, next) => {
    res.render('pages/prove02list', {
        links: req.app.locals.links,
        title: 'Book List - WK 02',
        path: 'prove02/list',
        books: books
    });
});

router.post('/viewBook', (req, res, next) => {
    var booknum = req.body.booknum;
    res.render('pages/prove02display', {
        links: req.app.locals.links,
        title: `${books[booknum].title} View`,
        path: 'prove02/display',
        book: books[booknum]
    });
});

router.post('/addBook', (req, res, next) => {
    var newbook = {
        title: req.body.title,
        summary: req.body.summary
    }
    books.push(newbook);
    res.writeHead(302, {'Location': '/prove02/list'});
});

router.get('/', (req, res, next) => {
    res.render('pages/prove02input', {
        links: req.app.locals.links,
        title: 'Input Book - WK 02',
        path: 'prove02/input'
    });
});

module.exports = router;
