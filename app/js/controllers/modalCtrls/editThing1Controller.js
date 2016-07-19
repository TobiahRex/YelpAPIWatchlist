function editThing($scope, $uibModalInstance, yelpBusiness) {
  console.log('editThingModalCtrl');
  const vm = $scope;
  vm.business = yelpBusiness;
  console.log('vm.business.reviews: ', vm.business);
  vm.submitChanges = () => {
    const editedThing = vm.thing;
    $uibModalInstance.close(editedThing);
  };
  vm.cancel = () => $uibModalInstance.dismiss();
}

angular.module('fullStackTemplate').controller('editThing1Controller', editThing);
