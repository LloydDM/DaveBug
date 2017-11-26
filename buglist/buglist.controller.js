(function () {
  'use strict';

  angular.module('davebug')
    .controller('BuglistController', ['$scope', '$http', 'bugService',
      function BuglistController($scope, $http, bugService) {
        $scope.statusFilter = '';
        $scope.bugs = [];
        $scope.activebug = {};

        activate();

        function activate() {
          return getBugs().then(function() {
              console.log('BuglistController activated');
          });
        }

        function getBugs() {
          return bugService.getBuglist().then(function(data) {
            $scope.bugs = data;
            $scope.activebug = bugService.getActiveBug();
            return $scope.bugs, $scope.activebug;
          });
        }

        $scope.setActive = function setActive(bugID) {
          console.log('trying to call setActiveBug with ID: ', bugID);
          bugService.setActiveBug(bugID);
          $scope.activebug = bugService.getActiveBug();
          console.log('$scope.activebug in setActive: ', $scope.activebug);
        };
      }
    ]);
})();