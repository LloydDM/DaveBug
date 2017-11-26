(function () {
  'use strict';

  angular.module('davebug')
    .controller('BuglistController', ['$scope', '$http', 'bugService',
      function BuglistController($scope, $http, bugService) {
        $scope.statusFilter = '';
        $scope.bugs = [];

        activate();

        function activate() {
          return getBugs().then(function() {
              console.log('BuglistController activated');
          });
        }

        function getBugs() {
          return bugService.getBuglist().then(function(data) {
            $scope.bugs = data;
            return $scope.bugs;
          });
        }

        $scope.setActive = function setActive() {
          console.log('trying to call setActiveBug');
          bugService.setActiveBug();
        }
      }
    ]);
})();