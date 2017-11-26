(function () {
  'use strict';

  angular.module('davebug')
    .factory('bugService', ['$http',
      function bugService($http) {
        return {
          getBuglist: getBuglist,
          getActiveBug: getActiveBug,
          setActiveBug: setActiveBug
        };

        function getBuglist() {
          return $http.get('/json-data/list-of-bugs.json')
            .then(function getBuglistCompleted(response) {
              return response.data;
            })
            .catch(function getBuglistFailed(error) {
              console.error(error);
            });
        }

        function getActiveBug() {
          return $http.get('/json-data/list-of-bugs.json')
            .then(function getActiveBugCompleted(response) {
              var results = response.data.filter(function(obj) {
                return obj.active === true;
              })[0];
              return results;
            })
            .catch(function getActiveBugFailed(error) {
              console.error(error);
            });
        }

        function setActiveBug() {
          console.log('setActiveBug executed');
        }
      }
    ]);
})();