'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('ng')
  .directive('mapDetailSlider', ['$timeout', function ($timeout) {
    return {
        restrict: 'E',
        require: "^mapDetail",
        link: function postLink(scope, element, attrs, ctrl, transclude) {
          var container = element;
          var state;
          var cards;
          var maxState;
          var offset;

          scope.$watch("missionCards", function(newValue, oldValue) {
              maxState = newValue.length - 1;
              state = 0;
              cards = {data: newValue, el: _.first(container).children};
              container.css('-webkit-transform', 'translate3d(0, 0, 0)');
          });

          scope.$on('slider.next', function(event, card) {
            if (state < maxState) {
              state += 1;
              ctrl.select(cards.data[state]);
              move(cards.el[state], state, maxState);
            }
          })

          scope.$on('slider.prev', function(event, card) {
            if (state > 0) {
              state -= 1;
              ctrl.select(cards.data[state]);
              move(cards.el[state], state, maxState);
            }
          })

          scope.$on('clickCard', function(event, card) {
            state = card.index;
            move(_.first(card.data), state, maxState);
          })

          var move = function(card, state, maxState) {
            console.log(card, state, maxState);
            if (state === 0) {
              console.log('state first');
              offset = 0 - card.offsetLeft + 10;
            }
            else if (state === maxState) {
              console.log('state last');
              offset = 0 - card.offsetLeft + 120;
            }
            else {
              console.log('state middle');
              offset = 0 - card.offsetLeft + 70;
            }
            container.css('-webkit-transform', 'translate3d('+offset+'px, 0, 0)');
          };

        }
    };
  }]);