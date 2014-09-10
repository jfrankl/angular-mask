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
        console.log($scope.missionCards);
        $scope.selected = card;
        console.log('emit');
        $rootScope.$emit('selectCard', card);
    };

    $scope.select(_.first($scope.missionCards));

    $rootScope.$on('addMask', function(event, mask) {
        $scope.select(_.first(mask));
        $scope.displayDetailCard = true;
    })

    $rootScope.$on('deleteMask', function(event) {
        $scope.displayDetailCard = false;
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