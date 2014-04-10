'use strict';

angular.module('popitApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
