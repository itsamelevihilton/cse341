const express = require('express');
const router = express.Router();
const aboutMeController = require('../controllers/aboutme');



router.get('/', aboutMeController.getAboutMe);

module.exports = router;