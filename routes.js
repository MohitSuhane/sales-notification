const baseUrl = '/api'

const router = require('express').Router();

const email = require(`.${baseUrl}/email`);
const welcome = require(`.${baseUrl}/welcome`);

router.use(`${baseUrl}/email`, email);
router.use(`${baseUrl}`, welcome)

module.exports = router;
