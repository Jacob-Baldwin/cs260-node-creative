var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  var myRe = new RegExp("^" + req.query.q);

  fs.readFile(__dirname + '/cities.dat',function(err,data) {
    if(err) throw err;

    var cities = data.toString().split("\n");
    var jsonresult = [];

    for(var i = 0; i < cities.length; i++) {
      var result = cities[i].search(myRe);
      if(result != -1) {
        jsonresult.push({city:cities[i]});
        // console.log(cities[i]);
      }
    }
    // console.log(jsonresult);
    res.json(jsonresult);

  });
});



module.exports = router;
