angular.module('cashingApp', [])
       .controller('cashingCtrl', function($scope, cashService) {
            $scope.cash = cashService;

            $scope.addData = function() {
              if ($scope.data && $scope.expirationDate) {
                $scope.cash.data = $scope.data;
                $scope.cash.expirationDate = $scope.expirationDate;
              }
            };
        })
       .service('cashService', function($interval) {
            var self = this;
            this.data = 'Cashed data must be here';

            $interval(function() {
              var now = new Date();
              if (self.expirationDate < now) {
                self.data = null;
              }
            }, 1000);
        });