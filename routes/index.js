var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/filter', function(req, res, next) {
  res.render('filter');
});
router.get('/submit', function(req, res, next) {
  res.render('submit');
});
router.get('/chicken', function(req, res, next) {
  res.render('chicken');
});
router.get('/medit', function(req, res, next) {
  res.render('medit');
});
router.get('/quinoa', function(req, res, next) {
  res.render('quinoa');
});


module.exports = router;
