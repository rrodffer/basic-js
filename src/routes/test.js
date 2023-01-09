const router = require('express').Router();

const basicMiddleware = require('../middlewares/test');

router.get('/basic', basicMiddleware.basicGet);
router.post('/nullishCoalescingOperator', basicMiddleware.NullishCoalescingOperator);
router.post('/object', basicMiddleware.Objects);

module.exports = router;
