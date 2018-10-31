var express = require('express');
var router = express.Router();
var fs = require('fs');
var https = require('https');

router.get('/', function(req, res, next) {

  https.get("https://owlbot.info/api/v1/dictionary/" + req.query.w + "?format=json", (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
    res.send(err);
  });

});



module.exports = router;
