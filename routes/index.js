var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/g1', function(req, res, next) {
  res.render('index', { title: 'images/q11.JPG' });
});
router.get('/g2', function(req, res, next) {
  res.render('index', { title:'images/q12.JPG'});
});
router.get('/g3', function(req, res, next) {
  res.render('index', { title: 'images/q13.JPG' });
});
router.get('/g4', function(req, res, next) {
  res.render('index', { title: 'images/q14.JPG' });
});
router.get('/g5', function(req, res, next) {
  res.render('index', { title: 'images/q15.JPG' });
});
router.get('/g6', function(req, res, next) {
  res.render('index', { title: 'images/q16.JPG' });
});
router.get('/g7', function(req, res, next) {
  res.render('index', { title: 'images/q17.JPG' });
});
router.get('/g8', function(req, res, next) {
  res.render('index', { title: 'images/q18.JPG' });
});
router.get('/g9', function(req, res, next) {
  res.render('index', { title: 'images/q19.JPG' });
});
router.get('/g10', function(req, res, next) {
  res.render('index', { title: 'images/q110.JPG' });
});
//level2

router.get('/g1tired', function(req, res, next) {
  res.render('index', { title: 'images/q21.JPG' });
});
router.get('/g2waterfall', function(req, res, next) {
  res.render('index', { title:'images/q21.JPG'});
});
router.get('/g3hushpuppies', function(req, res, next) {
  res.render('index', { title: 'images/q22.JPG' });
});
router.get('/g4whatsapp', function(req, res, next) {
  res.render('index', { title: 'images/q22.JPG' });
});
router.get('/g5goldrus', function(req, res, next) {
  res.render('index', { title: 'images/q23.JPG' });
});
router.get('/g6billgates', function(req, res, next) {
  res.render('index', { title: 'images/q23.JPG' });
});
router.get('/g7nokia', function(req, res, next) {
  res.render('index', { title:'images/q24.JPG'});
});
router.get('/g8flipkart', function(req, res, next) {
  res.render('index', { title: 'images/q24.JPG' });
});
router.get('/g9independence', function(req, res, next) {
  res.render('index', { title: 'images/q25.JPG' });
});
router.get('/g10booksecho', function(req, res, next) {
  res.render('index', { title: 'images/q25.JPG' });
});

//level3

router.get('/g1tiredrangdebasanti', function(req, res, next) {
  res.render('index', { title: 'images/q31.JPG' });
});
router.get('/g2waterfallrangdebasanti', function(req, res, next) {
  res.render('index', { title:'images/q31.JPG'});
});
router.get('/g3hushpuppiesoverlook', function(req, res, next) {
  res.render('index', { title: 'images/q31.JPG' });
});
router.get('/g4whatsappoverlook', function(req, res, next) {
  res.render('index', { title: 'images/q31.JPG' });
});
router.get('/g5goldrusblackberry', function(req, res, next) {
  res.render('index', { title: 'images/q32.JPG' });
});
router.get('/g6billgatesblackberry', function(req, res, next) {
  res.render('index', { title: 'images/q32.JPG' });
});
router.get('/g7nokiastarbucks', function(req, res, next) {
  res.render('index', { title:'images/q32.JPG'});
});
router.get('/g8flipcaktstarbucks', function(req, res, next) {
  res.render('index', { title: 'images/q32.JPG' });
});
router.get('/g9independenceindi mart', function(req, res, next) {
  res.render('index', { title: 'images/q33.JPG' });
});
router.get('/g10booksechoindiamart', function(req, res, next) {
  res.render('index', { title: 'images/q33.JPG' });
});
//

//level4

router.get('/g1tiredrangdebasantilgbtqpridemonth',function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g2waterfallrangdebasantilgbtqpridemonth', function(req, res, next) {
  res.render('index', { title:'images/q41.JPG'});
});
router.get('/g3hushpuppiesoverlooklgbtqpridemonth', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g4whatsappoverlooklgbtqpridemonth', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g5goldrusblackberrygatewayofindia', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g6billgatesblackberrygatewayofindia', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g7nokiastarbucksgatewayofindia', function(req, res, next) {
  res.render('index', { title:'images/q41.JPG'});
});
router.get('/g8flipkartstarbucksgatewayofindia', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g9independenceindiamartalllivematters', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
router.get('/g10booksechoindiamartalllivematters', function(req, res, next) {
  res.render('index', { title: 'images/q41.JPG' });
});
//master url

router.get('/g1tiredrangdebasantilgbtqpridemonthzindaginamilegidobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g2waterfallrangdebasantilgbtqpridemonthzindaginamilegidobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g3hushpuppiesoverlooklgbtqpridemonthzindaginmilegidobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g4whatsappoverlooklgbtqpridemonthzindaginamilegidobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g5goldrusblackberrygatewayofindiazindaginamilegidobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g6billgatesblackberrygatewayofindiazindaginamilegidobara',function(req, res, next) {
 return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g7nokiastarbucksgatewayofindiazindaginamilegidobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g8flipkartstarbucksgatewayofindiazindaginamilegidobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g9independenceindiamartalllivematterszindaginamilegidobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/guu-xris-vwm");
});
router.get('/g10booksechoindiamartalllivematterszindaginamilegidobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/guu-xris-vwm");
});
//
//answer handler
router.post('/a',function(req,res,next){
  console.log('/'+req.body.name1+req.body.name2)
  return res.redirect('/'+req.body.name1+req.body.name2);
 });
 router.post('/b',function(req,res,next){
  return res.redirect('back');
 });
module.exports = router;
