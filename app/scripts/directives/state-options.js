'use strict';

angular.module('popitApp')
  .directive('stateOptions', function (states) {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      template: '<select ng-options="state.abbreviation as state.name for state in states"></select>',
      require: '^ngModel',
      link: function(scope) {
        scope.states = states;
      }
    };
  });