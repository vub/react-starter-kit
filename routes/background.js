const router = require('express').Router();
const utils = require('../utils/utils');
const BackgroundService = require('../services/backgroundService');

router.get('/api/background', (req, res) => BackgroundService.getAll()
  .then(result => res.json(utils.succeed(result)))
  .catch((err) => {
    return res.json(utils.fail(err, err.message));
  }));

module.exports = router;