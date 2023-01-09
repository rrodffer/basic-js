const router = require('express').Router();

const testMiddleware = require('../middlewares/test');

router.get('/first', testMiddleware.testGet);

module.exports = router;