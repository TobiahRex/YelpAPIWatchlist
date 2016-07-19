function editThing($scope, $uibModalInstance, yelpBusiness) {
  console.log('editThingModalCtrl');
  const vm = $scope;
  vm.thing = yelpBusiness;
  console.log('vm.thing: ', vm.thing);
  vm.submitChanges = () => {
    const editedThing = vm.thing;
    $uibModalInstance.close(editedThing);
  };
  vm.cancel = () => $uibModalInstance.dismiss();
}

angular.module('fullStackTemplate').controller('editThing1Controller', editThing);
