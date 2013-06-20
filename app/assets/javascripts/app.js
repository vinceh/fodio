'use strict';

var app = angular.module('fodio', ['fodio.services', 'fodio.directives']);

function AppCtrl($scope, $location, $http, Statement) {
  $http.defaults.headers.common ['X-CSRF-Token']=$('meta[name="csrf-token"]').attr('content');

  $scope.getStatements = function(id) {
    Statement.get(id).then(function(statement) {
      $scope.statement = statement;
      console.log($scope.statement);
    });
  }

  $scope.saveStatement = function(statement) {
    $scope.savingStatement = true;
    Statement.save(statement).then(function(response) {
      $scope.savingStatement = false;
    });
  }

  $scope.addAction = function() {
    $scope.statement.actions.push({
      content: ""
    });
  }

  $scope.removeAction = function(index) {
    $scope.
  }
}

angular.module('fodio.services', [], function ($provide) {
  $provide.factory('Statement', function ($http) {
    var Statement = function (data) {
      angular.extend(this, data);
    }

    Statement.get = function (id) {
      return $http.get('/statements/' + id).then(function (response) {
        return new Statement(response.data);
      })
    }

    Statement.save = function (statement) {
      return $http.post('/statements/save', {statement: statement}).then(function (response) {
        return new response.data;
      })
    }

    return Statement;
  });
});

angular.module('fodio.directives', []).
  directive('popUp',function () {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs) {
        $element.click(function () {
          console.log('popping', $attrs.popUp);
          window.open(encodeURI($attrs.popUp), 'mywindow', 'width=' + $attrs.width + ',height=' + $attrs.height);
        });
      }
    }
  }).
  directive('scrolly',function () {
    return {
      restrict: "A",
      scope: {
        scrolly: '&'
      },
      link: function (scope, element, attrs) {

        $(window).scroll(function () {
          if (distanceToBottom() <= 500) {
            scope.scrolly();
          }
        });

        function distanceToBottom() {
          var scrollPosition = window.pageYOffset;
          var windowSize = window.innerHeight;
          var bodyHeight = document.body.offsetHeight;

          return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
        }
      }
    }
  }).
  directive('slider', function () {
    return {
      restrict: "A",
      scope: {
        sliderValue: '=',
        sliderType: '@',
        min: '@',
        max: '@',
        step: '@',
        initial: '='
      },
      controller: function ($scope, $element, $attrs) {
        var min = parseInt($attrs.min);
        var max = parseInt($attrs.max);
        var range = true;
        var value;

        if ($attrs.sliderType == 'single') {
          range = 'min';
          value = parseInt($scope.initial);
          $scope.sliderValue = value;
          $scope.sliderDisplay = value;
        }
        else if ($attrs.sliderType == 'double') {
          range = true;
          value = [2, 5];
          $scope.sliderValue = value;
          $scope.sliderDisplay = value;
        }

        $element.children('.slider').slider({
          step: parseInt($attrs.step),
          range: range,
          min: min,
          max: max,
          value: parseInt($scope.initial),
          values: value,
          slide: function (event, ui) {

            if ($attrs.sliderType == 'single') {
              $scope.sliderDisplay = ui.value;
            }
            else if ($attrs.sliderType == 'double') {
              $scope.sliderDisplay = ui.values;
            }

            $scope.$apply();
          },
          change: function (event, ui) {

            if ($attrs.sliderType == 'single') {
              $scope.sliderValue = ui.value;
            }
            else if ($attrs.sliderType == 'double') {
              $scope.sliderValue = ui.values;
            }
            $scope.$apply();
          }
        });
      }
    }
  });
