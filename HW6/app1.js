angular.module('someTableApp', [])
       .controller('someTableCtrl', function($scope) {
          $scope.data = [{
            tyndyRyndy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita neque, rem temporibus voluptatibus earum ullam cumque repudiandae explicabo animi illum, enim aperiam repellat quia beatae culpa velit. Qui, dolores et.',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, a dolores doloribus itaque possimus et recusandae enim totam aliquam deleniti, natus sed provident nihil, libero eius sit ut rerum repellat!',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, a dolores doloribus itaque possimus et recusandae enim totam aliquam deleniti, natus sed provident nihil, libero eius sit ut rerum repellat!',
          },{
            tyndyRyndy: 'Voluptate, vitae, ipsam. Tenetur maiores, est, sint, atque eligendi nostrum id doloremque autem blanditiis neque mollitia assumenda nam suscipit, nulla iste repellat.',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde animi inventore reiciendis voluptatum debitis mollitia quaerat, tempora eius facilis, corporis repellat voluptate nobis sunt quas omnis deleniti laudantium eligendi.',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde animi inventore reiciendis voluptatum debitis mollitia quaerat, tempora eius facilis, corporis repellat voluptate nobis sunt quas omnis deleniti laudantium eligendi.',
          },{
            tyndyRyndy: 'Rerum fuga quaerat, aut nostrum dolorum ullam in repellat, est ut ipsum officiis dignissimos hic reiciendis, totam distinctio commodi eius corporis modi!',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis quas, tenetur quia tempore nesciunt, est libero esse placeat eveniet laudantium aliquid. Corrupti animi delectus aperiam quam, minus officia! Dolores.',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officiis quas, tenetur quia tempore nesciunt, est libero esse placeat eveniet laudantium aliquid. Corrupti animi delectus aperiam quam, minus officia! Dolores.',
          },{
            tyndyRyndy: 'Deserunt quasi molestiae excepturi, sint eaque ut minus veniam itaque minima blanditiis facere, esse voluptatum obcaecati porro est impedit. In, nulla, labore.',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ut veritatis soluta aperiam explicabo obcaecati delectus aliquam excepturi mollitia alias, velit blanditiis tempora assumenda, numquam quam. Ex voluptas, aut placeat.',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ut veritatis soluta aperiam explicabo obcaecati delectus aliquam excepturi mollitia alias, velit blanditiis tempora assumenda, numquam quam. Ex voluptas, aut placeat.',
          },{
            tyndyRyndy: 'Numquam velit nulla quidem, quae sequi, sint facere molestiae, fuga nam, non tenetur. Rem tempora perspiciatis tenetur rerum nesciunt nulla. Recusandae, ex.',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem in animi cumque, inventore asperiores omnis tempore nemo facere provident quam! Modi quae porro consequatur omnis illum facere iste nulla aspernatur!',
            'salsa!!!': 'one-two-three...))) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, praesentium, voluptate. Sequi praesentium ratione incidunt minus in maxime pariatur ut laboriosam suscipit cupiditate, illum eos quis provident numquam ducimus eum.',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem in animi cumque, inventore asperiores omnis tempore nemo facere provident quam! Modi quae porro consequatur omnis illum facere iste nulla aspernatur!',
          },{
            tyndyRyndy: 'Nihil, enim iste ratione repudiandae corporis pariatur! Excepturi quia ipsum possimus, eligendi similique, neque nisi magnam itaque magni, rem impedit officia consectetur?',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dignissimos soluta ipsum quos quia cumque sed temporibus, eaque reiciendis, nesciunt sit ab vero, repellendus voluptates animi. Exercitationem, alias, quidem! Nulla.',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dignissimos soluta ipsum quos quia cumque sed temporibus, eaque reiciendis, nesciunt sit ab vero, repellendus voluptates animi. Exercitationem, alias, quidem! Nulla.',
          },{
            tyndyRyndy: 'Non, ipsam fugit inventore quo, recusandae expedita temporibus doloribus et id cupiditate soluta, ratione in sit quos ducimus porro eum quibusdam eveniet.',
            turumBurum: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quae quod quis, nobis facilis nisi obcaecati libero pariatur nihil non labore quaerat iste totam commodi cumque magnam voluptatem asperiores maiores?',
            sharavary: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quae quod quis, nobis facilis nisi obcaecati libero pariatur nihil non labore quaerat iste totam commodi cumque magnam voluptatem asperiores maiores?',
          }];
        })
       .directive('brrr', function() {
          return function (scope, elem, attrs) {
            var dataLink = attrs['brrr'];
            var data = scope[dataLink];
            
            var $table = angular.element('<table class="table table-bordered">');
            var $thead = angular.element('<thead>');
            var $headTr = angular.element('<tr>');
            var $tbody = angular.element('<tbody>');

            $thead.append($headTr);
            $table.append($thead);
            $table.append($tbody);

            data.forEach(function(obj) {
              var $ths = $headTr.children();

              for (var key in obj) {
                var keyIsPresent = false;

                for (var i = 0; i < $ths.length; i++) {
                  if ($ths.eq(i).text() == key) {
                    keyIsPresent = true;
                    break;
                  }
                }

                if (!keyIsPresent) {
                  var $th = angular.element('<th>');
                  $th.text(key);
                  $headTr.append($th);
                }
              }
            });

            var $ths = $headTr.children();

            data.forEach(function(obj) {
              var $tr = angular.element('<tr>');

              for (var i = 0; i < $ths.length; i++) {
                var propName = $ths.eq(i).text();
                var $td = angular.element('<td>');

                if (obj[propName]) {
                  $td.text(obj[propName]);
                } else {
                  $td.text('-');
                }
                
                $tr.append($td);
              }

              $tbody.append($tr);
            });

            elem.append($table);
          };
        });