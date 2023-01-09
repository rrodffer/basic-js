const router = require('express').Router();

const testMiddleware = require('../middlewares/test');

router.get('/basic', testMiddleware.basicGet);
router.post('/basic', testMiddleware.basicPost);

module.exports = router;
