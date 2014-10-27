'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('ng')
  .controller('mapDetailSliderController', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.$watch("missionCards", function(newValue, oldValue) {
        // console.log($scope);
    });

    $scope.isSelected = function(card) {
        return angular.equals(card, $scope.selected);
    }

  }])
  .directive('mapDetailSlider', ['$timeout', function ($timeout) {
    return {
        controller: 'mapDetailSliderController',
        restrict: 'E',
        link: function postLink(scope, element, attrs, ctrl, transclude) {
          var container = element;
          var parent;
          var parentWidth;
          var cards;
          var cardWidth;
          var containerPadding;

          scope.$watch("missionCards", function(newValue, oldValue) {
            $timeout(function(){
              parent = _.first(container.parent());
              parentWidth = parent.clientWidth;
              cards = container.children();
              cardWidth = _.first(container.children()).clientWidth;
              containerPadding = (parentWidth - cardWidth) / 2
              var count = 0;
              console.log(parent.clientWidth);
              _.each(cards, function(card) {
                count += card.clientWidth;
              });
              container.css('width', count + 'px');
              container.css('-webkit-transform', 'translate3d(0, 0, 0)');
            });
          });
          scope.$on('clickCard', function(event, card) {
            var offset = 0 - card[0].offsetLeft + containerPadding;
            console.log(card, offset);
            container.css('-webkit-transform', 'translate3d('+offset+'px, 0, 0)');
          })
        }
    };
  }]);