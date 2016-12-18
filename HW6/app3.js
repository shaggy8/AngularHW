angular.module('someMenuApp', [])
       .controller('someMenuCtrl', function($scope) {
          $scope.data = [{
            link: 'https://soundcloud.com/stream',
            itemName: 'SoundCloud'
          },{
            link: 'https://www.facebook.com/',
            itemName: 'Facebook'
          },{
            link: 'http://uk.wikipedia.org/',
            itemName: 'Wikipedia'
          },{
            link: 'http://www.ex.ua/search',
            itemName: 'EX.UA'
          }];
        })
       .directive('menu', function() {
          return {
            link: function(scope, element, attrs) {
              var propName = attrs['menu'];

              scope.arr = scope[propName];
              scope.name = attrs['itemName'];
              scope.link = attrs['link'];
            },
            replace: true,
            scope: true,
            template: '<ul class="nav nav-pills nav-stacked"><li ng-repeat="item in data"><a href="{{item[link]}}">{{item[name]}}</a></li></ul>'
          }
        });