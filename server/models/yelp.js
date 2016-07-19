require('dotenv').load();
const yelp = require('node-yelp-api');
const merge = require('merge');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const options = {
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
};


const yelpSchema = new mongoose.Schema({
  yelpId: { type: String },
  term: { type: String },
  location: { type: String },
  fans: [{ type: ObjectId, ref: 'User' }],
});

yelpSchema.statics.search = (input, cb) => {
  const parameters = {
    term: input.term,
    location: input.location,
  };
  yelp.search(merge(options, parameters), (err, data) => {
    if (err) return cb(err);
    return cb(null, JSON.parse(data.body, null, 2));
  });
};

yelpSchema.statics.favorite = (reqObj, userId, cb) => {
  if (!reqObj.term || !reqObj.location || !userId) {
    return cb({ Error: 'Required inputs are not present.' });
  }
  Yelp.find(reqObj.id, (err1, dbYelp) => {
    User.find(userId, (err2, dbUser) => {
      if (err1 || err2) return cb(err1 || err2);
      if (dbYelp) {
        dbYelp.fans.push(userId);
        dbUser.Favorites.push(dbYelp._id);
        dbYelp.save((err3, savedYelp) => {
          dbUser.save((err4, savedUser) => {
            if (err3 || err4) return cb(err3 || err4);
            return cb(null, { savedUser, savedYelp });
          });
        });
      } else if (!dbYelp) {
        const newYelp = new Yelp({
          yelpId: reqObj.id,
          term: reqObj.term,
          location: reqObj.location,
        });
        Yelp.create(newYelp, (err, ))
      }
    });
  });
}

const Yelp = mongoose.model('Yelp', yelpSchema);
module.exports = Yelp;
