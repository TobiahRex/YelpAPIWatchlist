function yelpService($http) {
  this.search = (term, location) => $http.post('/api/yelp/search', { term, location });

  this.addToFavorites = (reqObj, userId) => $http.post(`/api/yelp/favorite/${userId}`, reqObj);

  this.getFavorites = (userObj) => $http.get('/api/yelp/favorite', userObj);

  this.getBusinessDetails = (yelpId) => $http.get(`/api/yelp/favorite/business/${yelpId}`);
}

angular.module('fullStackTemplate').service('Yelp', yelpService);
