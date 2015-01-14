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
      },
      link: function postLink(scope, element, attrs, ctrl) {
        // var run = 0;
        // if (scope.data.selected) {
        //   run == 1;
        //   element.removeClass('now, before, after').addClass('now');
        // }
        // else if (run == 0) {
        //   element.removeClass('now, before, after').addClass('before');
        // }
        // else {
        //   element.removeClass('now, before, after').addClass('after');
        // }
        // console.log(scope.data.ding);
        element.on('click', function() {
            scope.$apply(function(){
                ctrl.select(scope.data);
            });
            scope.$emit('clickCard', {data: element, index: parseInt(attrs.index)});
        });
      }
    };
  });