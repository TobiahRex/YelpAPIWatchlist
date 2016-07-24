function yelpService($http) {
  this.getDb = () => $http.get('/api/yelp/');

  this.search = (term, location) => $http.post('/api/yelp/search', { term, location });

  this.addToFavorites = (reqObj, userId) => $http.post(`/api/yelp/favorite/${userId}`, reqObj);

  this.getBusinessDetails = (yelpId) => $http.get(`/api/yelp/favorite/business/${yelpId}`);

  this.removeFavorite = (favObj, userId) =>
  $http.post(`/api/yelp/favorite/${favObj._id}/remove/${userId}`);

  this.nextPage = (inputObj) => $http.post('/api/yelp/search/next-page', inputObj);
}

angular.module('fullStackTemplate').service('Yelp', yelpService);
