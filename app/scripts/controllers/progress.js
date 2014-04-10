'use strict';

angular.module('popitApp')
  .controller('ProgressCtrl', function ($scope, $http) {
    $scope.percentComplete = function() {
      return 100.0 * ($scope.location.signatureCount / $scope.location.signatureGoal);
    };
  });
