(function () {
  'use strict';

  angular.module('davebug')
    .controller('BuginfoController', ['$scope', 'bugService',
      function BuginfoController($scope, bugService) {
        $scope.activebug = bugService.getActiveBug();
        console.log('$scope.activebug in BuginfoController: ', $scope.activebug);
        console.log('bugService.getActiveBug in BuginfoController: ', bugService.getActiveBug());

        // activate();

        // function activate() {
        //   return getActiveBug();
        // }

        // function getActiveBug() {
        //   return bugService.getActiveBug().then(function(data) {
        //     $scope.activebug = data;
        //     return $scope.activebug;
        //   });
        // }
      }
    ]);
})();