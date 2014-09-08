'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('angularMaskApp')
  .controller('mapDetailController', ['$scope', function($scope) {
    $scope.hope = $scope.data.features[0].properties.related_info.recent_events;
  }])
  .directive('mapDetail', function () {
    return {
      templateUrl: 'scripts/directives/templates/mapDetailTemplate.html',
      scope: {
        data: '='
      },
      controller: 'mapDetailController',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });