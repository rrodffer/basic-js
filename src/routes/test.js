const router = require('express').Router();

const basicMiddleware = require('../middlewares/test');

router.get('/basic', basicMiddleware.basicGet);
router.post('/nullishCoalescingOperator', basicMiddleware.NullishCoalescingOperator);
router.post('/object', basicMiddleware.Objects);
router.post('/restOperator', basicMiddleware.RestOperator);
router.post('/shortSyntax', basicMiddleware.ShortSyntax);
router.post('/optionalChaining', basicMiddleware.OptionalChaining);

module.exports = router;
