(function () {
  'use strict';

  angular.module('davebug')
    .controller('BuginfoController', ['$scope', '$http', '$routeParams', '$window', 'bugService',
      function BuginfoController($scope, $http, $routeParams, $window, bugService) {

        activate();

        function activate() {
          return $http.get('/json-data/list-of-bugs.json').then(function (response) {
            $scope.activebug = response.data.filter(obj => obj.bug_id === Number($routeParams.bug_id))[0];
            $window.document.title = "Davebug - Bug #" + $routeParams.bug_id + ": " + $scope.activebug["bug_title"];
            bugService.setActiveBug(Number($routeParams.bug_id));
          });
        }
      }
    ]);
})();