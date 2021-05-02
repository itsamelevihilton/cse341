const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

const prove02Routes = require('./routes/prove02');

app.locals.links = [
    {
        title: 'Home',
        path: '/'
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
    .get('/', (req, res, next) => {
        res.render('pages/index', {
            links: req.app.locals.links,
            title: 'Levi Hilton\'s CSE 341 Repo',
            path: '/'
        });
    })
    .use((req, res, next) => {
        res.render('pages/404',  {
            links: req.app.locals.links,
            title: '404 - Page Not Found',
            path: req.url
        })
    })
    .listen(PORT, () => console.log(`Listening on port: ${ PORT }`));