var express = require('express');
var router = express.Router();
const controller = require('./email.controller');

router.post('/', controller.sendEmail);

module.exports = router;
