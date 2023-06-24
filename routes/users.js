const express = require('express');
const router = express.Router();

/**
 * Existe uma rota /users/ antes
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
