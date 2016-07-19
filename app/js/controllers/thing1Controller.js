function thing1Controller($scope, $state, $log, $uibModal, Yelp, Auth, toastr) {
  console.log('thing1Ctrl');
  const vm = $scope;

  function getFavorites() {
    Auth.getUser(vm.currentUser._id)
    .then((res) => {
      vm.favorites = res.data.Favorites;
    })
    .catch((err) => {
      vm.favorites = err;
    });
  }
  getFavorites();

  function renderThings() {
    Yelp.getFavorites(vm.currentUser)
    .then((res) => {
      vm.favorites = res.data;
    })
    .catch((err) => {
      vm.favorites = err;
    });
  }
  // function addThing(thing) {
  //   Yelp.addThing(thing)
  //   .then((res) => {
  //     vm.things = res.data;
  //   })
  //   .catch((err) => console.error(err));
  // }
  function editThing(thing) {
    Yelp.editThing(thing, vm.currentUser._id)
    .then(() => renderThings())
    .catch((err) => console.error(err));
  }
  function deleteThing(thing) {
    Yelp.removeThing(thing, vm.currentUser._id)
    .then(() => renderThings())
    .catch((err) => console.error(err));
  }
  renderThings();
  // // ////////////////////////////////////////////////////////////////////
  // // Add Thing
  // vm.addThing = () => {
  //   const modalInstance = $uibModal.open({
  //     keyboard: true,
  //     animation: true,
  //     templateUrl: '/uib/template/modal/addThingModal.html',
  //     controller: 'addThingModalController',
  //     size: 'lg',
  //   });
  //   modalInstance.result.then(photo => addThing(photo),
  //   () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  // };

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
    modalInstance.result.then((thing) => editThing(thing),
    () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  };

  // //////////////////////////////////////////////////////////////////////
  // Delete Thing
  vm.deleteThing = thing2Delete => {
    const modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/uib/template/modal/deleteThingModal.html',
      controller: 'deleteThingModalController',
      size: 'lg',
      resolve: { thing2Delete: () => thing2Delete },
    });
    modalInstance.result.then((thing) => deleteThing(thing),
    () => $log.info(`Modal dismissed at:  + ${new Date()}`));
  };
}

angular.module('fullStackTemplate').controller('thing1Controller', thing1Controller);
