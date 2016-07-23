function loginController($scope, $state, $auth) {
  console.log('loginCtrl');
  const vm = $scope;
  vm.authenticate = authenticate;
  vm.loginUser = loginUser;

  function loginUser(loginObj) {
    console.log('loginObj: ', loginObj);
    $auth.login(loginObj)
    .then(dataObj => {
      if (dataObj.status !== 200) console.log('login failed.', dataObj.data);
      $scope.$emit('loggedIn');
      $state.go('profile');
    })
    .catch(err => console.log('ERROR: ', err));
  }
  function authenticate(provider) {
    $auth.authenticate(provider)
    .then(() => $scope.$emit('loggedIn'))
    .catch(err => console.error('ERROR: login error', err));
  }
}

angular.module('fullStackTemplate').controller('loginController', loginController);
