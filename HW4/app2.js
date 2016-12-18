var app = angular.module('Calc', []);

app.controller('firstCtrl', function($scope) {
  $scope.result = {num: 0};
  $scope.calc = function() {
    $scope.result.num = +$scope.number.a + +$scope.number.b;
  };
});

app.controller('secondCtrl', function($scope) {
  $scope.calc = function() {
    $scope.result.num = +$scope.number.a - +$scope.number.b;
  };
});

app.controller('thirdCtrl', function($scope) {
  $scope.calc = function() {
    $scope.result.num = +$scope.number.a * +$scope.number.b;
  };
});

app.controller('fourthCtrl', function($scope) {
  $scope.calc = function() {
    $scope.result.num = +$scope.number.a / +$scope.number.b;
  };
});