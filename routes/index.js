/* Filename: index.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 24nd Oct 2021
5:00Am  */
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controller/index');

/* GET home page. */
router.get('/', controlerIndex.home);

/* GET About page avaulable on http://localhost:3000/about . */
router.get('/about', controlerIndex.about);


router.get('/service', controlerIndex.service);

router.get('/contact', controlerIndex.contact);

/* GET Projects page. */
router.get('/projects', controlerIndex.projects);

module.exports = router;
