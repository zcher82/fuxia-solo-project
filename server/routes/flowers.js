var express = require('express');
var router = express.Router();
var Flower = require('../models/flowerdb');


//get flowers from DB to use on DOM
router.get('/', function (req, res) {
  Flower.find({}, function (err, flowers) {
    // console.log(flowers);
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (flowers);
  });
});
