function main($state, $scope, $auth, Auth, toastr) {
  $scope.$on('loggedIn', () => loginCheck());
  $scope.$on('loggedOut', () => loginCheck());
  const vm = $scope;
  vm.logout = logout;
  function loginCheck() {
    Auth.getProfile()
    .then(res => {
      vm.currentUser = res.data;
      $state.go('profile', { id: res.data._id });
    })
    .catch(() => {
      vm.currentUser = null;
      $state.go('login');
    });
  }
  function logout() {
    Auth.logoutUser()
    .then(() => {
      $auth.logout();
      toastr.info('You have been successfully logged out.',
      'Logged Out', { iconClass: 'toast-logout' });
      $state.go('login');
    })
    .catch((err) => {
      toastr.error(`Could not logout: ${err}`, 'Error')
      console.error(err);
    });
  }
  loginCheck();
}

angular.module('fullStackTemplate').controller('mainController', main);
