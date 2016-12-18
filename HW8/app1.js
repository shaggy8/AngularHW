angular.module('notepadApp', [])
       .constant('basicUrl', 'http://localhost:2403/notes/')
       .controller('notepadCtrl', function($scope, $http, basicUrl) {
          $scope.refresh = function() {
            $http.get(basicUrl).success(function(data) {
              $scope.data = data;
            });
          };
          $scope.add = function() {
            $http.post(basicUrl, {note: $scope.item}).success(function(item) {
              $scope.data.push(item);
            });
          };
          $scope.delete = function(note) {
            $http({
              method: 'DELETE',
              url: basicUrl + note.id
            }).success(function() {
              $scope.data.splice($scope.data.indexOf(note), 1);
            });
          };
        });