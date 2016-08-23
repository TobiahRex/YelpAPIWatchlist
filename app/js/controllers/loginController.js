function loginController($scope, $state, $auth) {
  console.log('loginCtrl');
  const vm = $scope;
  vm.authenticate = authenticate;
  vm.loginUser = loginUser;

  function loginUser(loginObj) {
    $auth.login(loginObj)
    .then(dataObj => {
      if (dataObj.status !== 200) toastr.error('That username or password is not correct.', 'ERROR');
      $state.go('profile');
      $scope.$emit('loggedIn');
    })
    .catch(err => toastr.error('Could not log you in.', 'ERROR'));
  }
  function authenticate(provider) {
    $auth.authenticate(provider)
    .then(() => {
      $state.go('profile');
      $scope.$emit('loggedIn');
    })
    .catch(() => toastr.error('Could not log you in.', 'ERROR'));
  }
}

angular.module('fullStackTemplate').controller('loginController', loginController);
