angular
  .module('taskTwoApp', [])
  .controller('someCtrl', function($scope, someFucktory) {
    $scope.calc = someFucktory;
  })
  .factory('someFucktory', function() {
    return {
      minus: function(a, b) {
        this.result = +a - +b;
        return a - b;
      },
      plus: function(a, b) {
        this.result = +a + +b;
        return a + b;
      },
      multiply: function(a, b) {
        this.result = +a * +b;
        return a * b;
      },
      divide: function(a, b) {
        this.result = +a / +b;
        return a / b;
      },
      result: 0
    }
  })
  .controller('anotherCtrl', function($scope, fucktasticService) {
    $scope.calcul = fucktasticService;
  })
  .service('fucktasticService', Calculator)
  .controller('oneMoreCtrl', function($scope, simpleProvider) {
    $scope.c = simpleProvider;
  })
  .provider('simpleProvider', function() {
    return {
      $get: function() {
        return {
          minus: function(a, b) {
            this.result = +a - +b;
            return a - b;
          },
          plus: function(a, b) {
            this.result = +a + +b;
            return a + b;
          },
          multiply: function(a, b) {
            this.result = +a * +b;
            return a * b;
          },
          divide: function(a, b) {
            this.result = +a / +b;
            return a / b;
          },
          result: 0
        }
      }
    };
  });


function Calculator() {
  this.minus = function(a, b) {
    this.result = +a - +b;
    return a - b;
  };
  this.plus = function(a, b) {
    this.result = +a + +b;
    return a + b;
  };
  this.multiply = function(a, b) {
    this.result = +a * +b;
    return a * b;
  };
  this.divide = function(a, b) {
    this.result = +a / +b;
    return a / b;
  };
  this.result = 0;
}