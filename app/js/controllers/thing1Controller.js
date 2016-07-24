function thing1Controller($scope, $state, $log, $uibModal, Yelp, Auth, toastr) {
  console.log('thing1Ctrl');
  const vm = $scope;

  function getUserDetails() {
    Auth.getUser(vm.currentUser._id)
    .then((res) => {
      console.log('res.data.Favorites', res.data.Favorites);
      vm.favorites = res.data.Favorites;
    })
    .catch((err) => {
      vm.favorites = err;
    });
  }
  getUserDetails();

  vm.removeFavorite = (favObj) => {
    console.log('favObj: ', favObj.favorite);
    Yelp.removeFavorite(favObj.favorite, vm.currentUser._id)
    .then((res) => {
      console.log('res.data on remove: ', res.data);
      toastr.success('Favorite removed.', 'Success');
      getUserDetails();
    })
    .catch((err) => console.error(err));
  };
  // //////////////////////////////////////////////////////////////////////
  // Show Business Details
  vm.businessDetails = yelpId => {
    const modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/uib/template/modal/editThing1.html',
      controller: 'editThing1Controller',
      size: 'lg',
      resolve: {
        yelpBusiness($q) {
          return Yelp.getBusinessDetails(yelpId)
          .then((res) => $q.resolve(res.data))
          .catch((err) => {
            $q.reject(err);
            toastr.error('Could not get Details.', 'Error');
            $state.go('profile.thing1Controller');
          });
        },
      },
    });
    modalInstance.result.then((thing) => console.log('thing: ', thing),
    () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  };
}

angular.module('fullStackTemplate').controller('thing1Controller', thing1Controller);
