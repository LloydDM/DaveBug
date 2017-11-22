(function () {
  'use strict';

  angular
    .module('buglistItem')
    .component('buglistItem', {
      templateUrl: 'buglist-item/buglist-item.template.html',
      controller: ['$http',
        function BuglistItemController($http) {
          var self = this;
  
          self.statusSort = "";
          self.bugs = [];
  
          $http.get('/json-data/list-of-bugs.json').then(function (response) {
            self.bugs = response.data;
          });
        }
      ]
    });
})();