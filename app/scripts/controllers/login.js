'use strict';

/**
 * @ngdoc function
 * @name tmaClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tmaClientApp
 */
app.controller('LoginCtrl', function ($location, $scope, $http) {
  $scope.signup = function() {
  $http({
    url: '/api/users',
    method: 'POST',
    data: {
      user: $scope.user
    }
  }).success(function(data) {
    tokenHandler.set( data.auth_token );
    $location.path('/');
  }).error(function(reason) {
    $scope.user.errors = reason;
  });
};

});
