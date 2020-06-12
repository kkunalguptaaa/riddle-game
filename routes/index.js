var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/g1', function(req, res, next) {
  res.render('index', { title: 'images/q1.jpg' });
});
router.get('/g2', function(req, res, next) {
  res.render('index', { title:'images/q2.jpg'});
});
router.get('/g3', function(req, res, next) {
  res.render('index', { title: 'images/q3.jpg' });
});
router.get('/g4', function(req, res, next) {
  res.render('index', { title: 'images/q4.jpg' });
});
router.get('/g5', function(req, res, next) {
  res.render('index', { title: 'images/q5.jpg' });
});
router.get('/g6', function(req, res, next) {
  res.render('index', { title: 'images/q6.jpg' });
});
router.get('/g7', function(req, res, next) {
  res.render('index', { title: 'images/q7.jpg' });
});
router.get('/g8', function(req, res, next) {
  res.render('index', { title: 'images/q8.jpg' });
});
router.get('/g9', function(req, res, next) {
  res.render('index', { title: 'images/q9.jpg' });
});
router.get('/g10', function(req, res, next) {
  res.render('index', { title: 'images/q10.jpg' });
});
//level2

router.get('/g1tired', function(req, res, next) {
  res.render('index', { title: 'images/q21.jpg' });
});
router.get('/g2water fall', function(req, res, next) {
  res.render('index', { title:'images/q21.jpg'});
});
router.get('/g3hush puppies', function(req, res, next) {
  res.render('index', { title: 'images/q22.jpg' });
});
router.get('/g4whatsapp', function(req, res, next) {
  res.render('index', { title: 'images/q22.jpg' });
});
router.get('/g5goldrus', function(req, res, next) {
  res.render('index', { title: 'images/q23.jpg' });
});
router.get('/g6bill gates', function(req, res, next) {
  res.render('index', { title: 'images/q23.jpg' });
});
router.get('/g7nokia', function(req, res, next) {
  res.render('index', { title:'images/q24.jpg'});
});
router.get('/g8flipcart', function(req, res, next) {
  res.render('index', { title: 'images/q24.jpg' });
});
router.get('/g9independence', function(req, res, next) {
  res.render('index', { title: 'images/q25.jpg' });
});
router.get('/g10booksecho', function(req, res, next) {
  res.render('index', { title: 'images/q25.jpg' });
});

//level3

router.get('/g1tiredrang de basnti', function(req, res, next) {
  res.render('index', { title: 'images/q31.jpg' });
});
router.get('/g2water fallrang de basnti', function(req, res, next) {
  res.render('index', { title:'images/q31.jpg'});
});
router.get('/g3hush puppiesoverlook', function(req, res, next) {
  res.render('index', { title: 'images/q31.jpg' });
});
router.get('/g4whatsappoverlook', function(req, res, next) {
  res.render('index', { title: 'images/q31.jpg' });
});
router.get('/g5goldrusblackberry', function(req, res, next) {
  res.render('index', { title: 'images/q32.jpg' });
});
router.get('/g6bill gatesblackberry', function(req, res, next) {
  res.render('index', { title: 'images/q32.jpg' });
});
router.get('/g7nokiastarbucks', function(req, res, next) {
  res.render('index', { title:'images/q32.jpg'});
});
router.get('/g8flipcartstarbucks', function(req, res, next) {
  res.render('index', { title: 'images/q32.jpg' });
});
router.get('/g9independenceindia mart', function(req, res, next) {
  res.render('index', { title: 'images/q33.jpg' });
});
router.get('/g10booksechoindia mart', function(req, res, next) {
  res.render('index', { title: 'images/q33.jpg' });
});
//

//level4

router.get('/g1tiredrang de basntilgbtq pride month', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g2water fallrang de basntilgbtq pride month', function(req, res, next) {
  res.render('index', { title:'images/q41.jpg'});
});
router.get('/g3hush puppiesoverlooklgbtq pride month', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g4whatsappoverlooklgbtq pride month', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g5goldrusblackberrygateway of india', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g6bill gatesblackberrygateway of india', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g7nokiastarbucksgateway of india', function(req, res, next) {
  res.render('index', { title:'images/q41.jpg'});
});
router.get('/g8flipcartstarbucksgateway of india', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g9independenceindia martall lives matter', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
router.get('/g10booksechoindia martall lives matter', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg' });
});
//master url

router.get('/g1tiredrang de basntilgbtq pride monthzindgi na milegi dobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g2water fallrang de basntilgbtq pride monthzindgi na milegi dobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g3hush puppiesoverlooklgbtq pride monthzindgi na milegi dobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g4whatsappoverlooklgbtq pride monthzindgi na milegi dobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g5goldrusblackberrygateway of indiazindgi na milegi dobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g6bill gatesblackberrygateway of indiazindgi na milegi dobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g7nokiastarbucksgateway of indiazindgi na milegi dobara', function(req, res, next) {
  return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g8flipcartstarbucksgateway of indiazindgi na milegi dobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g9independenceindia martall lives matterzindgi na milegi dobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/eah-zkzt-bfm");
});
router.get('/g10booksechoindia martall lives matterzindgi na milegi dobara', function(req, res, next) {
 return res.redirect("https://meet.google.com/eah-zkzt-bfm");
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
