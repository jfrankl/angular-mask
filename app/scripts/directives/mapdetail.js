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
    this.addTab = function(tab) {
      console.log(tab);
    }
    this.selected = false;
    $scope.select = function(card) {
      $scope.$emit('tango', [1,2,3]);
      angular.forEach($scope.hope, function (eachCard) { 
        eachCard.selected = angular.equals(card, eachCard); 
      });
    };
  }])
  .directive('mapDetail', function () {
    return {
      templateUrl: 'scripts/directives/templates/mapDetailTemplate.html',
      scope: {
        data: '='
      },
      controller: 'mapDetailController',
      restrict: 'E',
      link: function postLink(scope, element, attrs, ctrl) {
        console.log(ctrl);
      }
    };
  });