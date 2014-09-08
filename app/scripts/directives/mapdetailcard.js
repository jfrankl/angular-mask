'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetailCard
 * @description
 * # mapDetailCard
 */
angular.module('angularMaskApp')
  .directive('mapDetailCard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mapDetailCard directive');
      }
    };
  });
