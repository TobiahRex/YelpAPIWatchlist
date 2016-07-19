function yelpService($http) {
  this.search = (term, location) => $http.post('/api/yelp/search', { term, location });

  this.addToFavorites = (reqObj, userId) => $http.post(`/api/yelp/favorite/${userId}`, reqObj);

  this.getFavorites = (userObj) => $http.get('/api/yelp/favorite', userObj);
}

angular.module('fullStackTemplate').service('Yelp', yelpService);
