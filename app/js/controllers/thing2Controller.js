function thing2Controller($scope, $state) {
  console.log('thing2Ctrl');
  const vm = $scope;
  console.log('$scope: ', vm, '\n$state: ', $state);
}

angular.module('fullStackTemplate').controller('thing2Controller', thing2Controller);
