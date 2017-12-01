(function () {
  'use strict';

  angular.module('davebug')
    .config(['$locationProvider', '$routeProvider', 
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");

        $routeProvider
          .when('/bugs/:bug_id', {
            template: '<buginfo></buginfo>'
          })
          .otherwise({
            template: '<h1>Pick a bug, Dave!</h1>'
          });
      }
    ]);
})();