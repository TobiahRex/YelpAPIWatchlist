function homeController($scope, Yelp, toastr) {
  console.log('homeCtrl');
  const vm = $scope;
  vm.activeTerm = '';
  vm.activeLocation = '';
  vm.pages = [];
  vm.currentPage = 1;
  let dbYelp = [];
  function getYelpFaves() {
    return Yelp.getDb()
    .then((res) => { dbYelp = res.data; })
    .catch((err) => { dbYelp = err; });
  }
  getYelpFaves();

  vm.isFavorites = vm.currentUser.Favorites.map(favObj => favObj.yelpId);
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
          }
        });
      });
      vm.results = res.data;
    })
    .catch((err) => {
      vm.results = err;
    });
  };

  function paginate(pageNumber, allData) {
    const pageArray = allData.map((item, i, allItems) => allItems.slice(pageNumber * 10, 10));
  }

  vm.getPage = pageNumber => {
    const pageNum = pageNumber * 10;
    const nextPageObj = {
      term: vm.activeTerm,
      location: vm.activeLocation,
      offset: pageNum,
    };
    Yelp.nextPage(nextPageObj)
    .then((res) => {
      vm.results = res.data;
    })
    .catch((err) => console.error(err));
  };

  vm.addToFavorite = (business) => {
    vm.isFavorites.push(business.id);
    const reqObj = {
      yelpId: business.id,
      term: vm.activeTerm,
      location: vm.activeLocation,
    };
    Yelp.addToFavorites(reqObj, vm.currentUser._id)
    .then(() => {
      getYelpFaves();
      vm.searchYelp(vm.activeTerm, vm.activeLocation);
      toastr.success('Added to Favorites', 'Added!');
    })
    .catch((err) => {
      toastr.error('Something went wrong. Could not Add to your Favorites.', 'Error');
      throw err;
    });
  };

  vm.repeatTimes = (n) => {
    const times = new Array(n);
    return times;
  };
}

angular.module('fullStackTemplate').controller('homeController', homeController);
