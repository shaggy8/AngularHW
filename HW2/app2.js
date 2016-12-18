angular
  .module('test', [])
  .controller('testCtrl', function($scope) {
      $scope.testItems = [{
        'question': 'Колір',
        'answers': {
            'answer1': 'Жовтий',
            'answer2': 'Зелений',
            'answer3': 'Помаранчевий',
            'answer4': 'Бузковий'
          }
        }, {
        'question': 'Запах',
        'answers': {
            'answer1': 'Пряний',
            'answer2': 'Свіжий',
            'answer3': 'Шалений',
            'answer4': 'Весняний'
          }
        }, {
        'question': 'Смак',
        'answers': {
            'answer1': 'Солодкий',
            'answer2': 'Гіркий',
            'answer3': 'Солоний',
            'answer4': 'Кислий'
          }
        }, {
        'question': 'Звук',
        'answers': {
            'answer1': 'Мелодія',
            'answer2': 'Шепіт',
            'answer3': 'Шелестіння',
            'answer4': 'Цмокання'
          }
        }, {
        'question': 'Дотик',
        'answers': {
            'answer1': 'Ніжний',
            'answer2': 'М\'який',
            'answer3': 'Пристрасний',
            'answer4': 'Впевнений'
          }
      }];

      $scope.checked = [];
      $scope.result = [];

      $scope.count = function(n) {
        $scope.num = n;
        $scope.checked = [];
      };

      $scope.check = function(val) {
        var present = $scope.checked.indexOf(val) + 1;
        if (present) return;
        $scope.checked.push(val);
      };

      $scope.add = function() {
        $scope.result = $scope.result.concat($scope.checked);
        $scope.checked = [];
      };

      $scope.show = function() {
        $scope.properties = $scope.result.join(' ');
        $scope.result = [];
      };
  });