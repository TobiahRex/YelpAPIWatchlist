function forgot($scope, $state) {
  console.log('forgotCtrl');
  const vm = $scope;
  const state = $state;
  console.log('vm: ', vm, '\nstate: ', state);
}

angular.module('fullStackTemplate').controller('forgotController', forgot);
