'use strict';

app.factory('tokenHandler', function($rootScope, $http, $q, $location) {
  var token = null,
  currentUser;

  var tokenHandler = {
    set: function(n) { token = n; },
    get: function() {
      if (!token)
        $rootScope.$broadcast('event:unauthorized');
      else
        return token
      }
  };

  return tokenHandler;
});