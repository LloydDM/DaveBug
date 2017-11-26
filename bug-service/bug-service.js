(function () {
  'use strict';

  angular.module('davebug')
    .factory('bugService', ['$http',
      function bugService($http) {
        var activebug = {};
        var buglist = [];
        console.log('buglist: ', buglist);
        
        function getBuglist() {
          return $http.get('/json-data/list-of-bugs.json')
            .then(function getBuglistCompleted(response) {
              buglist = response.data;
              console.log('buglist in getBuglist: ', buglist);
              activebug = buglist[0];
              console.log('activebug in getBuglist: ', activebug);
              return buglist;
            })
            .catch(function getBuglistFailed(error) {
              console.error(error);
            });
        }

        function getActiveBug() {
          console.log('activebug in getActiveBug: ', activebug);
          return activebug;
        }

        function setActiveBug(bugID) {
          console.log('setActiveBug executed with ID: ', bugID);
          activebug = {};
          for (var i = 0; i < buglist.length; i++) {
            buglist[i].active = false;
          }

          var bugToActivate = buglist.filter(function(obj) {
            return obj.bug_id === bugID;
          })[0];

          bugToActivate.active = true;

          activebug = bugToActivate;
          console.log('activebug: ', activebug);
        }

        return {
          getBuglist: getBuglist,
          getActiveBug: getActiveBug,
          setActiveBug: setActiveBug
        };
      }
    ]);
})();