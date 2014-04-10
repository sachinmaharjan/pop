'use strict';

angular.module('popitApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/locations').success(function(locations) {
      $scope.locations = locations;
      console.log($scope.locations[0].filepickerUrl);
    });
  });
