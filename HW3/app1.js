angular
  .module('ColorBlockApp', [])
  .controller('ColorBlockAppCtrl', function($scope) {
    $scope.text = 'Give me a color';
    $scope.paint = function(color) {
      $scope.color = color;
      $scope.text = 'I am ' + color + '!';
    };
  });