angular
  .module('Authorization', [])
  .controller('AuthorizationCtrl', function($scope) {
      $scope.testItems = {};

      $scope.submit = function(user) {
        $scope.greating = 'Wellcome ' + $scope.user.name + ' ' + $scope.user.surname + '!';
      };
      $scope.pattern = {
        email: /^[\d\w]+\@[\d\w]+\.\w{2,}/,
        phone: /^\+\d+/
      };
      $scope.defineError = function(error) {
        if (angular.isDefined(error)) {
          if (error.pattern) {
            return 'Неправильний синтаксис інформації у полі'
          } else if (error.minlength) {
            return 'Замало символів у полі'
          } else if (error.maxlength) {
            return 'Забагато символів у полі'
          }
        }
      };
      $scope.confirm = function() {
        $scope.confirmPattern = new RegExp('^' + $scope.user.pass + '$');
      };
  });