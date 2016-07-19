function profileDetailsController($scope) {
  console.log('profileDetailsController');
  const vm = $scope;
  vm.profile = vm.currentUser;
  console.log('ncurrentUser: ', vm.currentUser);
}

angular.module('fullStackTemplate')
.controller('profileDetailsController', profileDetailsController);
