angular
  .module('todo', [])

  // .config(function ($routeProvider, $locationProvider) {
  //   $locationProvider.html5Mode(true);
  //   $routeProvider.when('/table', {
  //     templateUrl: '/tableForTask2.html'
  //   });
  //   $routeProvider.when('/form', {
  //     templateUrl: '/formForTask2.html'
  //   });
  //   $routeProvider.otherwise({
  //     templateUrl: '/tableForTask2.html'
  //   });
  // })

  .constant('url', 'http://localhost:2403/list-items/')

  .controller('todoCtrl', function($scope, $http, $location, url) {
    $http.get(url).success(function(data) {
      $scope.list = data;
    });
    // $location.path('/table');

    $scope.add = function() {
      if (!$scope.name || !$scope.description || !$scope.date) return;

      var newItem = {
        name: $scope.name,
        description: $scope.description,
        date: $scope.date,
        completed: !!$scope.completed
      };

      $http.post(url, newItem).success(function() {
        $scope.list.push(newItem);
        $scope.name = $scope.description = $scope.date = $scope.completed = null;
      });
    };
  });