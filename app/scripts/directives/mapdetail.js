'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('angularMaskApp')
  .controller('mapDetailController', ['$scope', function($scope) {
    $scope.hope = $scope.data.features[0];
  }])
  .directive('mapDetail', function () {
    return {
      template: '<div>{{hope}}</div>',
      scope: {
        data: '='
      },
      controller: 'mapDetailController',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });