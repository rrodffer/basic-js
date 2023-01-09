const router = require('express').Router();

const basicMiddleware = require('../middlewares/test');

router.get('/basic', basicMiddleware.basicGet);
router.post('/nullishCoalescingOperator', basicMiddleware.NullishCoalescingOperator);

module.exports = router;
