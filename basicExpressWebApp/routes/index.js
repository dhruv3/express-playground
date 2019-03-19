var express = require('express');
var router = express.Router({
  caseSensitive: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('AboutPage', { title: 'About' });
});

module.exports = router;
