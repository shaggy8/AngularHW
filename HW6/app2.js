angular.module('paragraphsApp', [])
       .controller('paragraphsCtrl', function($scope) {
          $scope.data = [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita neque, rem temporibus voluptatibus earum ullam cumque repudiandae explicabo animi illum, enim aperiam repellat quia beatae culpa velit. Qui, dolores et.',
            'Voluptate, vitae, ipsam. Tenetur maiores, est, sint, atque eligendi nostrum id doloremque autem blanditiis neque mollitia assumenda nam suscipit, nulla iste repellat.',
            'Rerum fuga quaerat, aut nostrum dolorum ullam in repellat, est ut ipsum officiis dignissimos hic reiciendis, totam distinctio commodi eius corporis modi!',
            'Deserunt quasi molestiae excepturi, sint eaque ut minus veniam itaque minima blanditiis facere, esse voluptatum obcaecati porro est impedit. In, nulla, labore.',
            'Numquam velit nulla quidem, quae sequi, sint facere molestiae, fuga nam, non tenetur. Rem tempora perspiciatis tenetur rerum nesciunt nulla. Recusandae, ex.',
            'One-two-three... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, praesentium, voluptate. Sequi praesentium ratione incidunt minus in maxime pariatur ut laboriosam suscipit cupiditate, illum eos quis provident numquam ducimus eum.',
            'Nihil, enim iste ratione repudiandae corporis pariatur! Excepturi quia ipsum possimus, eligendi similique, neque nisi magnam itaque magni, rem impedit officia consectetur?',
            'Non, ipsam fugit inventore quo, recusandae expedita temporibus doloribus et id cupiditate soluta, ratione in sit quos ducimus porro eum quibusdam eveniet.',
          ];
        })
       .directive('parag', function() {
          return {
            link: function(scope, element, attrs) {
              var propName = attrs['parag'];
              scope.arr = scope[propName];
            },
            replace: true,
            restrict: 'A',
            scope: true,
            template: '<p ng-repeat="string in arr">{{string}}</p>'
          }
        });