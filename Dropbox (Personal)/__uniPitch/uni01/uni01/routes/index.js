var express = require('express');
var router = express.Router();

var movieWasGenerated = false;
var mBody =[];
function getBody(){
	if (!movieWasGenerated){
		return 'Submit a movie first...'
	}
	else {
		return mBody;
	}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
  movieWasGenerated = false;
  console.log("movie was generated false")
});

/* GET user form list page. */
router.get('/userform', function(req, res, next) {
  res.render('userForm', { title: 'Express' });
});

/* Get single form page*/
router.get('/callcenter1',function(req,res,next) {
  res.render('callcenter1')
})

/* GET home page. */
router.get('/vide', function(req, res, next) {
  //res.render(req.body);
  
  
  console.log('=========================nm=================')
  console.log(req.originalUrl)
  var mm  = req.originalUrl;
  var nm = mm.split('?')[1];
  console.log(nm)

  res.send(req.originalUrl.split('?')[1]);
  
});

/* GET home page. */
router.get('/movieplayer', function(req, res, next) {
  //res.render(req.body);
  //res.send(req.originalUrl.split('?')[1]);
  //https://s3.amazonaws.com/ntca4216873931/CA20001ASHAHGMSSVWIGRR.mov
  movieName = req.originalUrl.split('?')[1];
  movieNameURL = 'https://s3.amazonaws.com/ntca4216873931/' + movieName + '.mov';
  res.render('movieplayer', { movieaddress: movieNameURL });
  //console.log(req.originalUrl)
});


router.post('/erdem', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //console.log(req.body)
  //console.log(req)
  console.log(req.headers.host) // HOST VALIDATION
  if (req.headers.host == process.env.HOST_ADDRESS) {
    console.log('=====proper access=====')
    movieWasGenerated = true;
    //mBody = 'Your movie is being genereated, it will be available at this link:' + req.body.inputClosure;
    res.render('workingonVideo', { mylink: 'www.hotmail.com'});
  }
  else {
    mBody = "You don't have access to this page";
    console.log('=====INVALID ACCESS=====')
  }
});

router.get('/erdem', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('workingonVideo', { mylink: 'www.hotmail.com'});
});
module.exports = router;
