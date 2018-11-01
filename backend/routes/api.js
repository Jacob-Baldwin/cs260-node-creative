var express = require('express');
var router = express.Router();

var datastore = require('../datastore');

router.get('/persons', function(req, res, next) {
  res.json(datastore);
});

// format is /api/upvote?id={pid}
router.get('/upvote', (req, res, next) => {
  let persons = datastore.persons;
  let id = req.query.id;

  let i = persons.findIndex(x => x.id == id);

  persons[i].upvotes++;

  res.json(datastore);
});

// format is /api/downvote?id={pid}
router.get('/downvote', (req, res, next) => {
  let persons = datastore.persons;
  let id = req.query.id;

  let i = persons.findIndex(x => x.id == id);

  persons[i].upvotes--;

  res.json(datastore);
});

module.exports = router;
