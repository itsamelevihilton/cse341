const express = require('express');
const router = express.Router();
const fs = require('fs');
const dF = require('../utils/dateFormatter');

var books = [];

router.post('/viewBook', (req, res, next) => {
    const stats = fs.statSync('./views/pages/prove02display.ejs');
    var booknum = req.body.index;
    res.render('pages/prove02display', {
        links: req.app.locals.links,
        description: 'A book title along with it\'s summary',
        title: `${books[booknum].title} View`,
        path: '/prove02',
        modified: dF.formatDate(stats.mtime),
        book: books[booknum],
        index: booknum
    });
});

router.post('/deleteBook', (req, res, next) => {
    const stats = fs.statSync('./views/pages/prove02display.ejs');
    var booknum = req.body.index;
    books.splice(booknum, 1);
    next();
});

router.post('/addBook', (req, res, next) => {
    var newbook = {
        title: req.body.title,
        summary: req.body.summary
    }
    books.push(newbook);
    next();
});

router.get('/input', (req, res, next) => {
    const stats = fs.statSync('./views/pages/prove02input.ejs');
    res.render('pages/prove02input', {
        links: req.app.locals.links,
        title: 'Input Book',
        description: 'A place to input your books ',
        modified: dF.formatDate(stats.mtime),
        path: '/prove02'
    });
});

router.use('/', (req, res, next) => {
    const stats = fs.statSync('./views/pages/prove02list.ejs');
    res.render('pages/prove02list', {
        links: req.app.locals.links,
        title: 'Book List',
        description: 'A list of the current books that are loaded',
        path: '/prove02',
        modified: dF.formatDate(stats.mtime),
        books: books
    });
});

module.exports = router;
