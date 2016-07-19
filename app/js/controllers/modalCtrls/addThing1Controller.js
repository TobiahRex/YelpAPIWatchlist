function addThingModalController($scope, $uibModalInstance) {
  console.log('addAlbumModalCtrl');
  const vm = $scope;
  vm.createThing1 = createThing1;
  vm.cancel = cancel;

  function createThing1() {
    console.log('$scope.thing1: ', $scope.thing1);
    const thing1 = angular.copy($scope.thing1);
    $uibModalInstance.close(thing1);
  }
  function cancel() {
    $uibModalInstance.dismiss();
  }
}

angular.module('fullStackTemplate').controller('addThingModalController', addThingModalController);
