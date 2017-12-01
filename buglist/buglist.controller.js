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
          });
        }

        function getBugs() {
          return bugService.getBuglist().then(function(data) {
            $scope.bugs = data;
            return $scope.bugs;
          });
        }

        $scope.setActive = function setActive(bugID) {
          bugService.setActiveBug(bugID);
        };
      }
    ]);
})();