'use strict';

angular.module('popitApp')
  .controller('NewLocationCtrl', function ($scope, $http, $location, $upload) {
    $scope.location = {};
    $scope.onFileSelect = function(files) { 
      $scope.image = files[0];
      console.log($scope.image);
    };

    $scope.tinymceOptions = {
        menubar:false,
        statusbar: false,
        theme_advanced_buttons1: "bold"
    };
    $scope.filepick = function() {
      filepicker.pick(function(InkBlob){
        console.log(InkBlob.url);
        $scope.location.filepickerUrl = InkBlob.url;
      });
    };

    $scope.create = function() {
      $http.post('/api/locations', {location: $scope.location}).success(function(location) {
        $location.path("/locations/" + location._id);
      }).error(function(err) {
        console.log(err);
      });
    };
  });
