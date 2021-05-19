const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors'); // Place this with other requires (like 'path' and 'express')
const PORT = process.env.PORT || 5000;

const routes = require('./routes');
const mongooseConnect = require('./utils/database').mongooseConnect;


const corsOptions = {
    origin: "https://cse341portfolio.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));



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
        title: 'WK 02',
        path: '/wk02'
    },
    {
        title: 'WK 03',
        path: '/wk03'
    },
    {
        title: 'WK 04',
        path: '/wk04'
    }
]
function defaultSecondaryLinks(initialPath) {
    return[
        {
            title: 'Prove',
            path: `${initialPath}/prove`
        },
        {
            title: 'Team Activity',
            path: `${initialPath}/ta`
        }
    ]
}
app.locals.secondaryLinks = {
    wk02: defaultSecondaryLinks('/wk02'),
    wk03: defaultSecondaryLinks('/wk03'),
    wk04: defaultSecondaryLinks('/wk04')
}

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
    .use('/', routes)
mongooseConnect((client) => {
    app.listen(PORT, () => console.log(`Listening on port: ${ PORT }`));
})