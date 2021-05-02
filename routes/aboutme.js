const express = require('express');
const router = express.Router();
const fs = require('fs');
const dF = require('../utils/dateFormatter');



router.get('/', (req, res, next) => {
    const stats = fs.statSync('./views/pages/aboutme.ejs');
    res.render('pages/aboutme', {
        links: req.app.locals.links,
        title: 'About Me - Levi Hilton',
        description: 'A small description of Levi Hilton',
        modified: dF.formatDate(stats.mtime),
        path: '/aboutme'
    });
});

module.exports = router;