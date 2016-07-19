function deleteThing1Controller($scope, $uibModalInstance, thing2Delete) {
  console.log('deleteAlbumModalController');
  const vm = $scope;
  vm.thing = thing2Delete.thing;
  vm.deleteThing1 = deleteThing1;
  vm.cancel = cancel;

  function deleteThing1() {
    const thing = angular.copy(vm.thing);
    $uibModalInstance.close(thing._id);
  }
  function cancel() {
    $uibModalInstance.dismiss();
  }
}
angular.module('fullStackTemplate')
.controller('deleteAlbumModalController', deleteThing1Controller);
