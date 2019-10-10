var express = require('express');
var router = express.Router();

router.get('/welcome', function(req, res, next) {
  res.send({ title: 'Express' });
});

module.exports = router;