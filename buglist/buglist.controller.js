(function () {
  'use strict';

  angular.module('davebug')
    .controller('BuglistController', ['$scope', '$http',
      function BuglistController($scope, $http) {
        $scope.statusSort = '';
        $scope.bugs = [];

        $http.get('/json-data/list-of-bugs.json').then(function (response) {
            $scope.bugs = response.data;
        });
      }
    ]);
})();