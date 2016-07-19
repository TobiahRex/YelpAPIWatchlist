const express = require('express');
const router = new express.Router();
const Yelp = require('../models/yelp');

router.post('/search', (req, res) => Yelp.search(req.body, res.handle));

module.exports = router;
