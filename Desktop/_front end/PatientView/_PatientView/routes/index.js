var express = require('express');
var router = express.Router();
var url = require('url');
var pvnode = require('./pvnodelib')

function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

indexRouting = pvnode[2];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', indexRouting );
});


/* GET home page. */
router.get('/pview', function(req, res, next) {
  //movieName = req.originalUrl;
  movieName = req.originalUrl.split('?')[1];
  //indexRouting = { title: 'Medinfo.TV', title2: movieName };
  //res.render('index', indexRouting );
});



module.exports = router;
