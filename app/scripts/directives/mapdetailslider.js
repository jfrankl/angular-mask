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
          var container = element.find('map-detail-table');
          console.log(container);
          var state;
          var cards;
          var maxState;
          var offset;
          var paddingLeft;

          scope.$watch("missionCards", function(newValue, oldValue) {
              maxState = newValue.length - 1;
              console.log(container, 'cont');
              state = 0;
              cards = {data: newValue, el: container.find('map-detail-card')};
              container.css('-webkit-transform', 'translate3d(0, 0, 0)');
          });

          scope.sliderNext = function(event, card) {
            if (state < maxState) {
              state += 1;
              ctrl.select(cards.data[state]);
              console.log(cards, cards.el[state], state);
              move(cards.el[state], state, maxState);
            }
          }

          scope.sliderPrev = function(event, card) {
            if (state > 0) {
              state -= 1;
              ctrl.select(cards.data[state]);
              console.log(cards, cards.el[state], state);
              move(cards.el[state], state, maxState);
            }
          }

          scope.$on('clickCard', function(event, card) {
            state = card.index;
            move(_.first(card.data), state, maxState);
          })

          var move = function(card, state, maxState) {
            console.log(card, state, maxState);
            if (state === 0) {
              paddingLeft = 10;
            }
            else if (state === maxState) {
              paddingLeft = 120;
            }
            else {
              paddingLeft = 70;
            }
            offset = 0 - card.offsetLeft + paddingLeft;
            container.css('-webkit-transform', 'translate3d('+offset+'px, 0, 0)');
          };

        }
    };
  }]);