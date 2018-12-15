var express = require('express');
var router = express.Router();
const background = require('./background');

router.use('/', background);
router.get('/**', (req, res) => res.render('main/index'));

module.exports = router;
