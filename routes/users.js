/* Filename: users.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 24nd Oct 2021
5:00Am  */
let express = require('express');
let router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
