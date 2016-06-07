var express = require('express');
var router = express.Router();
var Customer = require('../models/customers');


//GET -- all the customers to add to the DOM
router.get('/', function (req, res) {
  Customer.find({}, function (err, customers) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (customers);
  });
});

module.exports = router;
