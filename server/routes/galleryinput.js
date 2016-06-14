var express = require('express');
var router = express.Router();
var Arrangement = require('../models/galleryinput');
var Accent = require('../models/accents');
var Green = require('../models/greens');

//POST new arrangment
router.post('/', function (req, res) {
  var arrangements = new Arrangement(req.body);
  arrangements.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

//GET new arrangement
router.get('/', function (req, res) {
  Arrangement.find({}, function (err, arrangements) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (arrangements);
  });
});


//POST new floral accent
router.post('/accent', function (req, res) {
  console.log(req.body);
  var accents = new Accent(req.body);
  accents.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

//POST new greens
router.post('/green', function (req, res) {
  var greens = new Green(req.body);
  greens.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});


module.exports = router;
