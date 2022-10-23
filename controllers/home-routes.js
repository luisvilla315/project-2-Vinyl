const router = require('express').Router();
const sequelize = require('../config/connection');
const { User} = require('../models');
const withAuth = require('../utils/auth');

// homepage route
router.get('/search', async (req, res) => {
    try {
       res.render('homepage', {
      // TODO: Add a comment describing the functionality of this property
      loggedIn: req.session.loggedIn,
    });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

 // login route
router.get('/login', (req, res) => {
  //if (req.session.loggedIn) {
   // res.redirect('/');
   // return;
  //}
  res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
  //if (req.session.loggedIn) {
    //res.redirect('/');
    //return;
  //}
  res.render('signup');
});

 // login route
 router.get('/', (req, res) => {
  //if (req.session.loggedIn) {
   // res.redirect('/');
   // return;
  //}
  res.render('explore');
});

module.exports = router;
