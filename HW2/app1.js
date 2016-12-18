angular
  .module('taskTwoApp', [])
  .controller('someCtrl', function($scope) {
    $scope.result = 0;
    $scope.calc = function(op) {
      $scope.result = eval($scope.a + op + $scope.b);
    };
  });