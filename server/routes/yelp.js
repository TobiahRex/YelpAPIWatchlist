const express = require('express');
const router = new express.Router();
const Yelp = require('../models/yelp');


router.route('/favorite/:id')
.post((req, res) => Yelp.addFavorite(req.body, req.params.id, res.handle))
.get((req, res) => Yelp.getFavorites(req.params.id, res.handle))
.put((req, res) => Yelp.updateFavorites(req.params.id, res.handle));

router.get('/favorite/business/:yelp_id', (req, res) => {
  Yelp.getBusinessDetails(req.params.yelp_id, res.handle);
});
router.post('/search', (req, res) => Yelp.search(req.body, res.handle));
router.get('/', (req, res) => Yelp.find({}, res.handle));
router.delete('/', (req, res) => Yelp.remove({}, res.handle));

module.exports = router;
