function splashController($scope, $state) {
  console.log('splashCtrl');
  const vm = $scope;
  vm.goToHome = goToHome;

  function goToHome() {
    $state.go('home');
  }
}

angular.module('fullStackTemplate').controller('splashController', splashController);
