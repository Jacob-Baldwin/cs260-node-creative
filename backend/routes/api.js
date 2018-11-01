var express = require('express');
var router = express.Router();

var datastore = require('../datastore');

/* GET users listing. */
router.get('/persons', function(req, res, next) {
  res.json(datastore);
});

module.exports = router;
