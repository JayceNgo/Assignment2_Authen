/* Filename: index.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 24nd Oct 2021
5:00Am  */
exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('home', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};

exports.service = function(req, res, next) {
    res.render('service', { 
        title: 'Service',
        userName: req.user ? req.user.username : ''
     });
}
exports.about = function(req, res, next) {
    res.render('about', { 
        title: 'About',
        userName: req.user ? req.user.username : ''
     });
}

exports.projects = function(req, res, next) {
    res.render('project', { 
      title: 'Projects',
      userName: req.user ? req.user.username : '' 
    });
}

exports.contact = function(req, res, next) {
    res.render('contact', { 
        title: 'Contact',
        userName: req.user ? req.user.username : ''
     });
}
