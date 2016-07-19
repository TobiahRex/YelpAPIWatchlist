function home($scope, $state, $uibModal, toastr) {
  console.log('homeCtrl');
  const vm = $scope;
  vm.showSuccessMsg = () => toastr.success('Your information has been saved successfully!');
  vm.showInfoMsg = () => toastr.info("You've got a new email!", 'Information');
  vm.showErrorMsg = () => toastr.error("Your information hasn't been saved!", 'Error');
  vm.showWarningMsg = () => toastr.warning('Your computer is about to explode!', 'Warning');
}

angular.module('fullStackTemplate').controller('homeController', home);
