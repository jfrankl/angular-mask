'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('angularMaskApp')
  .controller('mapDetailController', ['$scope', '$rootScope', 'createMask', function($scope, $rootScope, createMask) {

    $scope.select = function(card) {
        $scope.selected = card;
        $rootScope.$emit('selectCard', card, $scope.hasHappened);
    };

    init();

    function init() {
        $scope.select(_.first($scope.missionCards));
        $scope.hasHappened = true;
    }

    $rootScope.$on('addMask', function(event, mask) {
        $scope.select(_.first(mask));
    })

    $scope.isSelected = function(card) {
        return angular.equals(card, $scope.selected);
    }

  }])
  .directive('mapDetail', function () {
    return {
        templateUrl: 'scripts/directives/templates/mapDetailTemplate.html',
        scope: {
            missionCards: '=',
            map: '='
        },
        controller: 'mapDetailController',
        restrict: 'E',
        link: function postLink(scope, element, attrs, ctrl) {

        }
    };
  });