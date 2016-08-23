function logoutController($state, Auth, $auth) {
  console.log('logoutCtrl');
  Auth.logoutUser()
  .then(res => {
    $auth.logout();
    toastr.info('You have been successfully logged out.',
    'Logged out',
    { iconClass: 'toast-info-toby' });
    $scope.$emit('loggedOut');
  });
}

angular.module('fullStackTemplate').controller('logoutController', logoutController);
