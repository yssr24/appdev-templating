const express = require('express');
const router = express.Router();
const main = require('../controller/Controller');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/contact', main.contact);
module.exports = router;