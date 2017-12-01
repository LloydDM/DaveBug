(function () {
  'use strict';

  angular.module('davebug')
    .factory('bugService', ['$http',
      function bugService($http) {
        var buglist = [];
        
        function getBuglist() {
          return $http.get('/json-data/list-of-bugs.json')
            .then(function getBuglistCompleted(response) {
              buglist = response.data;
              return buglist;
            })
            .catch(function getBuglistFailed(error) {
              console.error(error);
            });
        }

        function setActiveBug(bugID) {
          buglist.forEach(bug => bug.active = false);
          var bugToActivate = buglist.filter(obj => obj.bug_id === bugID)[0];
          bugToActivate.active = true;
        }

        return {
          getBuglist: getBuglist,
          setActiveBug: setActiveBug
        };
      }
    ]);
})();