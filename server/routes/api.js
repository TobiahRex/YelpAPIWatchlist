const express = require('express');
const router = new express.Router();

router.use('/crud', require('./cruds'));
router.use('/users', require('./users'));
router.use('/yelp', require('./yelp'));
router.use('/oauth', require('./oauth'));

module.exports = router;
