var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('',function(req,res){
  res.render('user');
})
router.get('/g1', (req, res) =>{
  res.render('index', { title: 'images/q11.jpg',hint:"Easy One...!" });
});
router.get('/g2', function(req, res, next) {
  res.render('index', { title:'images/q12.jpg',hint:"Easy One...!" });
 });
router.get('/g3', function(req, res, next) {
  res.render('index', { title: 'images/q13.jpg',hint:"Easy One...!"  });
 });
router.get('/g4', function(req, res, next) {
  res.render('index', { title: 'images/q14.jpg',hint:"Kuch tasveeryein jawab bayan karti hai..!" });
 });
router.get('/g5', function(req, res, next) {
  res.render('index', { title: 'images/q15.jpg',hint:"Kabhi kabhi sawal bhi jawab aasan kartai hai..!" });
 });
router.get('/g6', function(req, res, next) {
  res.render('index', { title: 'images/q16.jpg',hint:"Easy One...!" });
 });
router.get('/g7', function(req, res, next) {
  res.render('index', { title: 'images/q17.jpg',hint:"yaadein puzzle ki trh hoti hai jo lamho ki tasveeryein jodkar mukamal hoti hai..!" });
 });
router.get('/g8', function(req, res, next) {
  res.render('index', { title: 'images/q18.jpg',hint:"Easy One...!" });
 });
router.get('/g9', function(req, res, next) {
  res.render('index', { title: 'images/q19.jpg',hint:"itss easy...!" });
 });
router.get('/g10', function(req, res, next) {
  res.render('index', { title: 'images/q110.jpg',hint:"dummy hint" });
});
//level2

router.get('/g1socialdistancing', function(req, res, next) {
  res.render('index', { title: 'images/q21.jpg',hint:"Easy One...!" });
});
router.get('/g2callofduty', function(req, res, next) {
  res.render('index', { title:'images/q21.jpg',hint:"Easy One...!"});
});
router.get('/g3indianexpress', function(req, res, next) {
  res.render('index', { title: 'images/q22.jpg',hint:"Easy One...!" });
});
router.get('/g4netflixandchill', function(req, res, next) {
  res.render('index', { title: 'images/q22.jpg',hint:"Easy One...!" });
});
router.get('/g5amphancyclone', function(req, res, next) {
  res.render('index', { title: 'images/q23.jpg',hint:"Easy One...!" });
});
router.get('/g6dandimarch', function(req, res, next) {
  res.render('index', { title: 'images/q23.jpg',hint:"Easy One...!" });
});
router.get('/g7lego', function(req, res, next) {
  res.render('index', { title:'images/q24.jpg',hint:"Easy One...!"});
});
router.get('/g8maxlifeinsurance', function(req, res, next) {
  res.render('index', { title: 'images/q24.jpg',hint:"Easy One...!" });
});
router.get('/g9businessstandard', function(req, res, next) {
  res.render('index', { title: 'images/q25.jpg',hint:"Easy One...!" });
});
router.get('/g10herohonda', function(req, res, next) {
  res.render('index', { title: 'images/q25.jpg',hint:"Easy One...!" });
});

//level3

router.get('/g1socialdistancingmoneyheist', function(req, res, next) {
  res.render('index', { title: 'images/q31.jpg',hint:"Easy One...!" });
});
router.get('/g2callofdutymoneyheist', function(req, res, next) {
  res.render('index', { title:'images/q31.jpg',hint:"Easy One...!"});
});
router.get('/g3indianexpressspacex', function(req, res, next) {
  res.render('index', { title: 'images/q31.jpg',hint:"Easy One...!" });
});
router.get('/g4netflixandchillspacex', function(req, res, next) {
  res.render('index', { title: 'images/q32.jpg',hint:"Easy One...!" });
});
router.get('/g5amphancyclonemario', function(req, res, next) {
  res.render('index', { title: 'images/q32.jpg',hint:"Easy One...!" });
});
router.get('/g6dandimarchmario', function(req, res, next) {
  res.render('index', { title: 'images/q32.jpg',hint:"Easy One...!" });
});
router.get('/g7legoqueereye', function(req, res, next) {
  res.render('index', { title:'images/q33.jpg',hint:"Easy One...!"});
});
router.get('/g8maxlifeinsurancequeereye', function(req, res, next) {
  res.render('index', { title: 'images/q33.jpg',hint:"Easy One...!" });
});
router.get('/g9businessstandardnrnarayanamurthy', function(req, res, next) {
  res.render('index', { title: 'images/q33.jpg',hint:"Easy One...!" });
});
router.get('/g10herohondanrnarayanamurthy', function(req, res, next) {
  res.render('index', { title: 'images/q33.jpg',hint:"Easy One...!" });
});
//

//level4

router.get('/g1socialdistancingmoneyheistbridgestone',function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g2callofdutymoneyheistbridgestone', function(req, res, next) {
  res.render('index', { title:'images/q41.jpg',hint:"try this one guys..!"});
});
router.get('/g3indianexpressspacexbridgestone', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g4netflixandchillspacexfacebook', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g5amphancyclonemariofacebook', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g6dandimarchmariofacebook', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g7legoqueereyecontinentaltyre', function(req, res, next) {
  res.render('index', { title:'images/q41.jpg',hint:"try this one guys..!"});
});
router.get('/g8maxlifeinsurancequeereyecontinentaltyre', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g9businessstandardnrnarayanamurthycontinentaltyre', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
router.get('/g10herohondanrnarayanamurthycontinentaltyre', function(req, res, next) {
  res.render('index', { title: 'images/q41.jpg',hint:"try this one guys..!" });
});
//master url

router.get('/g1socialdistancingmoneyheistbridgestonebombaydyeing', function(req, res, next) {
  return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g2callofdutymoneyheistbridgestonebombaydyeing', function(req, res, next) {
  return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g3indianexpressspacexbridgestonebombaydyeing', function(req, res, next) {
  return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g4netflixandchillspacexfacebookbombaydyeing', function(req, res, next) {
 return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g5amphancyclonemariofacebookbombaydyeing', function(req, res, next) {
 return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g6dandimarchmariofacebookbombaydyeing',function(req, res, next) {
 return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g7legoqueereyecontinentaltyrebombaydyeing', function(req, res, next) {
  return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g8maxlifeinsurancequeereyecontinentaltyrebombaydyeing', function(req, res, next) {
 return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g9businessstandardnrnarayanamurthycontinentaltyrebombaydyeing', function(req, res, next) {
 return res.redirect("https://meet.google.com/dij-rhor-jti");
});
router.get('/g10herohondanrnarayanamurthycontinentaltyrebombaydyeing', function(req, res, next) {
 return res.redirect("https://meet.google.com/dij-rhor-jti");
});
//
//answer handler
router.post('/a',function(req,res,next){
  console.log('/'+req.body.name1+req.body.name2)
  var url=req.body.name1+req.body.name2;
  url=url.toLowerCase();
  url=url.split(" ").join("");
  return res.redirect('/'+url);
 });
 router.post('/b',function(req,res,next){
  return res.redirect('back');
 });
module.exports = router;
