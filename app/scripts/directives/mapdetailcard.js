'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetailCard
 * @description
 * # mapDetailCard
 */
angular.module('angularMaskApp')
  .controller('mapDetailCardController', ['$scope', function($scope) {
  }])
  .directive('mapDetailCard', function () {
    return {
      templateUrl: 'scripts/directives/templates/mapDetailCardTemplate.html',
      require : "^mapDetail",
      restrict: 'E',
      controller: 'mapDetailCardController',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs, ctrl) {
        console.log(ctrl);
        ctrl.addTab();
      }
    };
  });
