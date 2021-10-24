/* Filename: passport.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 24nd Oct 2021
5:00Am  */
const passport = require('passport');

module.exports = function() {
  const User = require('../models/user');
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  require('./local')();
};