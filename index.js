const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const dF = require('./utils/dateFormatter');

const app = express();

const prove02Routes = require('./routes/prove02');
const aboutMeRoutes = require('./routes/aboutme');

app.locals.links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About Me',
        path: '/aboutme'
    },
    {
        title: 'Prove 02',
        path: '/prove02/list'
    }
]

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use('/prove02', prove02Routes)
    .use('/aboutme', aboutMeRoutes)
    .get('/', (req, res, next) => {
        const stats = fs.statSync('./views/pages/index.ejs');
        res.render('pages/index', {
            links: req.app.locals.links,
            description: 'A portfolio for Levi Hilton to display the work he does in CSE 341',
            title: 'Levi Hilton - CSE 341 Portfolio',
            modified: dF.formatDate(stats.mtime),
            path: '/'
        });
    })
    .use((req, res, next) => {
        const stats = fs.statSync('./views/pages/404.ejs');
        res.render('pages/404', {
            links: req.app.locals.links,
            description: 'The page you were looking for was not found',
            title: '404 - Page Not Found',
            modified: dF.formatDate(stats.mtime),
            path: req.url
        })
    })
    .listen(PORT, () => console.log(`Listening on port: ${ PORT }`));