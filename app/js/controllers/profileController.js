function profile($state, $scope, Auth, dbProfile) {
  console.log('profileCtrl');
  const vm = $scope;
  vm.profile = dbProfile.data;
}

angular.module('fullStackTemplate').controller('profileController', profile);
