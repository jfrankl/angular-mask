// 'use strict';

// /**
//  * @ngdoc directive
//  * @name angularMaskApp.directive:mapDetailCard
//  * @description
//  * # mapDetailCard
//  */
angular.module('angularMaskApp')
  .directive('mapDetailCard', function () {
    return {
      templateUrl: 'scripts/directives/templates/mapDetailCardTemplate.html',
      require: "^mapDetail",
      restrict: 'E',
      scope: {
        data: '=',
        selected: '='
      },
      link: function postLink(scope, element, attrs, ctrl) {
        element.on('click', function() {
            scope.$apply(function(){
                ctrl.select(scope.data);
            });
        });
      }
    };
  });