(function () {
  'use strict';

  angular.module('davebug')
    .directive('buglist', function buglist() {
      return {
        restrict: 'E',
        templateUrl: "buglist/buglist.template.html"
      }
    });
})();