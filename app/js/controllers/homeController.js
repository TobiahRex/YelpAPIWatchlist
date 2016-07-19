function home($scope, Yelp, toastr) {
  console.log('homeCtrl');
  const vm = $scope;
  vm.activeTerm = '';
  vm.activeLocation = '';

  vm.searchYelp = (term, location) => {
    vm.activeTerm = term;
    vm.activeLocation = location;
    Yelp.search(term, location)
    .then((res) => {
      vm.results = res.data;
    })
    .catch((err) => {
      vm.results = err;
    });
  };

  vm.addToFavorite = (business) => {
    const reqObj = {
      yelpId: business.id,
      term: vm.activeTerm,
      location: vm.activeLocation,
    };
    Yelp.addToFavorites(reqObj, vm.currentUser._id)
    .then((res) => {
      console.log('result: ', res.data);
      toastr.success('Added to Favorites', 'Added!');
    })
    .catch((err) => {
      console.error('error: ', err);
      toastr.error('Something went wrong. Could not Add to your Favorites.', 'Error');
    });
  };
}

angular.module('fullStackTemplate').controller('homeController', home);
