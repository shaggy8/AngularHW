angular.module('diary', [])
       .controller('diaryCtrl', function($scope) {
          $scope.notes = [{
            note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita neque, rem temporibus voluptatibus earum ullam cumque repudiandae explicabo animi illum, enim aperiam repellat quia beatae culpa velit. Qui, dolores et.',
            date: new Date (2015, 10, 10)
          },{
            note: 'Voluptate, vitae, ipsam. Tenetur maiores, est, sint, atque eligendi nostrum id doloremque autem blanditiis neque mollitia assumenda nam suscipit, nulla iste repellat.',
            date: new Date (2013, 04, 15)
          },{
            note: 'Rerum fuga quaerat, aut nostrum dolorum ullam in repellat, est ut ipsum officiis dignissimos hic reiciendis, totam distinctio commodi eius corporis modi!',
            date: new Date (2013, 00, 30)
          },{
            note: 'Deserunt quasi molestiae excepturi, sint eaque ut minus veniam itaque minima blanditiis facere, esse voluptatum obcaecati porro est impedit. In, nulla, labore.',
            date: new Date (2013, 11, 06)
          },{
            note: 'Numquam velit nulla quidem, quae sequi, sint facere molestiae, fuga nam, non tenetur. Rem tempora perspiciatis tenetur rerum nesciunt nulla. Recusandae, ex.',
            date: new Date (2012, 03, 15)
          },{
            note: 'Nihil, enim iste ratione repudiandae corporis pariatur! Excepturi quia ipsum possimus, eligendi similique, neque nisi magnam itaque magni, rem impedit officia consectetur?',
            date: new Date (2003, 03, 26)
          },{
            note: 'Non, ipsam fugit inventore quo, recusandae expedita temporibus doloribus et id cupiditate soluta, ratione in sit quos ducimus porro eum quibusdam eveniet.',
            date: new Date (2012, 12, 30)
          }];

          $scope.amount = 5;
          $scope.dateSort = 'date';
          $scope.dateHeader = 'Date &#8595;';

          $scope.add = function() {
            if (!$scope.note || !$scope.date) return;
            console.dir($scope.date);
            $scope.notes.push({note: $scope.note, date: $scope.date});
            $scope.note = $scope.date = '';
          };

          $scope.sort = function() {
            if ($scope.dateSort == 'date') {
              $scope.dateSort = '-date';
              $scope.dateHeader = 'Date &#8593;';
            } else {
              $scope.dateSort = 'date';
              $scope.dateHeader = 'Date &#8595;';
            }
          };
       })
       .filter('unsafe', function($sce) {
         return function(val) {
           return $sce.trustAsHtml(val);
       };
});