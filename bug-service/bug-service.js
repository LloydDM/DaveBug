(function () {
  'use strict';

  angular
    .module('buglistItem')
    .factory('bugService', bugService);

    bugService.$inject = ['$http'];

    function bugService($http) {
      return {
        getBuglist: getBuglist
      };

      function getBuglist() {
        return $http.get('/json-data/list-of-bugs.json')
          .then(getBuglistCompleted)
          .catch(getBuglistFailed);

        function getBuglistCompleted(response) {
          return response.data;
        }

        function getBuglistFailed(error) {
          console.log(error);
        }
      }
    }

})();