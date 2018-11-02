var express = require('express');
var router = express.Router();
var uuid = require('uuid');

var datastore = require('../datastore');

router.get('/persons', function(req, res, next) {
  res.json(datastore.persons);
});

router.get('/datastore', function(req, res, next) {
  res.json(datastore);
});

// format is /api/upvote?id={pid}
router.get('/upvote', (req, res, next) => {
  let persons = datastore.persons;
  let id = req.query.id;

  let i = persons.findIndex(x => x.id == id);

  persons[i].upvotes++;

  res.json(datastore.persons);
});

// format is /api/downvote?id={pid}
router.get('/downvote', (req, res, next) => {
  let persons = datastore.persons;
  let id = req.query.id;

  let i = persons.findIndex(x => x.id == id);

  persons[i].downvotes++;

  res.json(datastore.persons);
});

router.post('/submit', (req, res, next) => {
  let imageFile = req.files.avatar;
  let body = req.body;

  imageFile.mv(`build/images/${imageFile.name}`, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    else {
      person = {
        id: datastore.next_person_id,
        name: body.name,
        bio: body.bio,
        gender: body.gender,
        age: parseInt(body.age),
        downvotes: 0,
        upvotes: 0,
        image_filename: imageFile.name
      }

      datastore.next_person_id = datastore.next_person_id + 1;

      datastore.persons.push(person);

      return res.json(datastore.persons);
    }
  });
});

module.exports = router;
