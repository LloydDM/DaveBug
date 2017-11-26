(function () {
  'use strict';

  angular.module('davebug')
    .directive('buginfo', function buginfo() {
      return {
        restrict: 'E',
        templateUrl: 'buginfo/buginfo.template.html'
      };
    });
})();