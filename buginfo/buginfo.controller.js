(function () {
  'use strict';

  angular.module('davebug')
    .controller('BuginfoController', ['$scope', 'bugService',
      function BuginfoController($scope, bugService) {
        $scope.activebug = {};

        activate();

        function activate() {
          return getActiveBug().then(function() {
            console.log('BuginfoController activated');
          });
        }

        function getActiveBug() {
          return bugService.getActiveBug().then(function(data) {
            $scope.activebug = data;
            return $scope.activebug;
          });
        }
      }
    ]);
})();