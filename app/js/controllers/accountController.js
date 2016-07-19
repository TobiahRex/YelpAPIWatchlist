function accountController($scope) {
  console.log('accountCtrl');
  const vm = $scope;
  console.log('vmCurrentUser: ', vm.currentUser);

}

angular.module('fullStackTemplate').controller('accountController', accountController);
