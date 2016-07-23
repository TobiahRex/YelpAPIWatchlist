function home($scope, Yelp, toastr) {
  console.log('homeCtrl');
  const vm = $scope;
  console.log('currentUser.Favorites: ', vm.currentUser.Favorites);
  vm.activeTerm = '';
  vm.activeLocation = '';
  let dbYelp = [];
  function getYelpFaves() {
    return Yelp.getDb()
    .then((res) => { dbYelp = res.data; })
    .catch((err) => { dbYelp = err; });
  }
  getYelpFaves();

  vm.isFavorites = vm.currentUser.Favorites.map(favObj => favObj.yelpId);
  console.log('vm.isFavorites: ', vm.isFavorites);
  vm.searchYelp = (term, location) => {
    vm.activeTerm = term;
    vm.activeLocation = location;
    Yelp.search(term, location)
    .then((res) => {
      res.data.businesses.forEach(business => {
        dbYelp.map(dbBusiness => {

          if (business.id === dbBusiness.yelpId) {
            business.fans = dbBusiness.fans.length;
            vm.results = res.data;
          } else {
            console.error('NO matches');
          }
        });
      });
      vm.results = res.data;
    })
    .catch((err) => {
      vm.results = err;
    });
  };

  vm.addToFavorite = (business) => {
    // vm.currentUser.Favorites.push(business.id);
    const reqObj = {
      yelpId: business.id,
      term: vm.activeTerm,
      location: vm.activeLocation,
    };

    Yelp.addToFavorites(reqObj, vm.currentUser._id)
    .then((res) => {
      console.log('result: ', res.data);
      getYelpFaves();
      vm.searchYelp(vm.activeTerm, vm.activeLocation);
      toastr.success('Added to Favorites', 'Added!');
    })
    .catch((err) => {
      console.error('error: ', err);
      toastr.error('Something went wrong. Could not Add to your Favorites.', 'Error');
    });
  };
}

angular.module('fullStackTemplate').controller('homeController', home);
