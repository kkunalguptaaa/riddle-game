var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res, next) {
  res.render('index', { title: 'What has to be broken before you can use it What has to be broken before you can use itWhat has to be broken before you can use it What has to be broken before you can use itWhat has to be broken before you can use it What has to be broken before you can use it?' });
});
router.get('/b', function(req, res, next) {
  res.render('index', { title: 'b' });
});
router.get('/c', function(req, res, next) {
  res.render('index', { title: 'c' });
});
router.get('/d', function(req, res, next) {
  res.render('index', { title: 'd' });
});
router.get('/e', function(req, res, next) {
  res.render('index', { title: 'e' });
});
router.get('/f', function(req, res, next) {
  res.render('index', { title: 'f' });
});
router.get('/g', function(req, res, next) {
  res.render('index', { title: 'g' });
});
router.get('/h', function(req, res, next) {
  res.render('index', { title: 'h' });
});
router.get('/i', function(req, res, next) {
  res.render('index', { title: 'i' });
});
router.get('/j', function(req, res, next) {
  res.render('index', { title: 'j' });
});
router.get('/k', function(req, res, next) {
  res.render('index', { title: 'k' });
});
router.get('/l', function(req, res, next) {
  res.render('index', { title: 'l' });
});
router.get('/m', function(req, res, next) {
  res.render('index', { title: 'm' });
});
router.get('/n', function(req, res, next) {
  res.render('index', { title: 'n' });
});
router.get('/o', function(req, res, next) {
  res.render('index', { title: 'o' });
});
router.get('/p', function(req, res, next) {
  res.render('index', { title: 'p' });
});
router.get('/q', function(req, res, next) {
  res.render('index', { title: 'q' });
});
router.get('/r', function(req, res, next) {
  res.render('index', { title: 'r' });
});
router.get('/s', function(req, res, next) {
  res.render('index', { title: 's' });
});
//master url
router.get('/t', function(req, res, next) {
  return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});

//answer handler
router.post('/a',function(req,res,next){
  return res.redirect('/'+req.body.name);
 });
 router.post('/b',function(req,res,next){
  return res.redirect('back');
 });
module.exports = router;
