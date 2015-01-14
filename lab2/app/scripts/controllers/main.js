'use strict';

/**
 * @ngdoc function
 * @name lab2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lab2App
 */
angular.module('lab2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeItems = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ];
  });
