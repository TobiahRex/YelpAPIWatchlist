require('dotenv').load();
const yelp = require('node-yelp-api');
const merge = require('merge');

const options = {
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
};


const Yelp = {
  search() {
    const parameters = {
      term: 'food',
      location: 'Fremont',
    };
    yelp.search(merge(options, parameters), (err, data) => {
      console.log('data: ', JSON.parse(data.body, null, 2));
      console.log('err: ', err);
    });
  },
};

Yelp.search();
module.exports = Yelp;
