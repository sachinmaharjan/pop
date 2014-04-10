'use strict';

angular.module('popitApp')
  .controller('LocationCtrl', function ($scope, $http, $routeParams) {
    $scope.location = {};
    $scope.loadData = function() {
      $http.get("/api/locations/" + $routeParams.id).success(function(location) {
        console.log("location loaded", location);
        $scope.location = location;
      });
    };

    $scope.bookit = function(id)
    {
      debugger;
      alert("Booked");
    }
    // $scope.commentSignatures = function() {
    //   if (!$scope.location.signatures) {
    //     return [];
    //   }
    //   return $scope.location.signatures.filter(function(signature) {
    //     return signature.comments;
    //   });
    // };
    $scope.$on("locationSigned", function() {
      console.log("Location scope got location signed");
      $scope.loadData();
    });
    $scope.loadData();
  });
