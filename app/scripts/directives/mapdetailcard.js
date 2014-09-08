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
      link: function postLink(scope, element, attrs, mapDetailCardController) {
        console.log(mapDetailCardController);
        element.on('click', function(a, b, c) {
            console.log(scope, element, attrs, a, b, c);
            element.addClass('active');
        })
      }
    };
  });
