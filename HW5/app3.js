angular.module('fltr', [])

       .controller('fltrCtrl', function($scope) {
          $scope.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        })

       .filter('taskFilter', function() {

          return function(val) {
            if (!angular.isArray(val)) return;

            function sorting (a, b) {
              return a - b;
            }
            
            var odd = [];
            var even = [];

            val.forEach(function(x) {
              if (x % 2) {
                odd.push(x);
              } else {
                even.push(x);
              }
            });

            odd.sort(sorting);
            even.sort(sorting);

            return even.concat(odd);
          }
        });