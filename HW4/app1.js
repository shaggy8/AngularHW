var app = angular.module('copyPaste', []);

app.controller('copyCtrl', function($scope, $rootScope) {
  $scope.copy = function() {
    $rootScope.$broadcast('copySome', {
      text: $scope.inputText
    });
  };
});

app.controller('pasteCtrl', function($scope) {
  $scope.$on('copySome', function(event, args) {
    $scope.boofer = args.text;
  });
  $scope.paste = function() {
    $scope.inputText = $scope.boofer;
  };
});