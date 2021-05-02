const express = require('express');
const router = express.Router();
const fs = require('fs');
const dF = require('../utils/dateFormatter');

var books = [];

router.get('/list', (req, res, next) => {
    const stats = fs.statSync('./views/pages/prove02list.ejs');
    res.render('pages/prove02list', {
        links: req.app.locals.links,
        title: 'Book List - WK 02',
        description: 'A list of the current books that are loaded',
        path: 'prove02/list',
        modified: dF.formatDate(stats.mtime),
        books: books
    });
});

router.post('/viewBook', (req, res, next) => {
    const stats = fs.statSync('./views/pages/prove02display.ejs');
    var booknum = req.body.booknum;
    res.render('pages/prove02display', {
        links: req.app.locals.links,
        description: 'A book title along with it\'s summary',
        title: `${books[booknum].title} View`,
        path: 'prove02/display',
        modified: dF.formatDate(stats.mtime),
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
    const stats = fs.statSync('./views/pages/prove02input.ejs');
    res.render('pages/prove02input', {
        links: req.app.locals.links,
        title: 'Input Book - WK 02',
        description: 'A place to input your books ',
        modified: dF.formatDate(stats.mtime),
        path: 'prove02/input'
    });
});

module.exports = router;
