var express = require('express');
var router = express.Router();

/* GET Welcome page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Sales Notification Service' });
});

module.exports = router;
