function addThing2ModalController($scope, $uibModalInstance) {
  console.log('addPhotoModalCtrl');
  const vm = $scope;
  vm.createThing2 = createThing2;
  vm.cancel = cancel;

  function createThing2() {
    console.log('$scope.thing2: ', $scope.thing2);
    const thing2 = angular.copy($scope.thing2);
    $uibModalInstance.close(thing2);
  }
  function cancel() {
    $uibModalInstance.dismiss();
  }
}

angular.module('fullStackTemplate').controller('addPhotoModalController', addThing2ModalController);
