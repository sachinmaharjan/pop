'use strict';

angular.module('popitApp')
  .controller('NewSignatureCtrl', function ($scope, $routeParams, $location, $http) {
    $scope.newSignature = {};
    $scope.signature = {};
    $scope.reset = function() {
      $scope.signature = angular.copy($scope.newSignature);
    };
    $scope.create = function() {
      $http.post('/api/locations/' + $routeParams.id  + '/signatures', {signature: $scope.signature}).success(function(signature) {
        $scope.reset();
        $scope.$emit("locationSigned");
      });
    };
  });
