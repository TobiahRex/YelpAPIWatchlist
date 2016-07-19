function allThingsController($scope, $state) {
  console.log('allThingsCtrl');
  const vm = $scope;
  console.log('$scope: ', vm, '\n$state: ', $state);
}

angular.module('fullStackTemplate').controller('allThingsController', allThingsController);
