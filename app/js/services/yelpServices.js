function yelpService($http) {
  this.search = (term, location) => $http.post('/api/yelp/search', { term, location });

  this.addToFavorites = (reqObj, userId) => $http.post(`/api/yelp/favorite/${userId}`, reqObj);

  this.getBusinessDetails = (yelpId) => $http.get(`/api/yelp/favorite/business/${yelpId}`);

  this.removeFavorite = (favObj, userId) => $http.post(`/api/yelp/favorite/${favObj._id}/remove/${userId}`);
}

angular.module('fullStackTemplate').service('Yelp', yelpService);
