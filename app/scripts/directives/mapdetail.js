'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('angularMaskApp')
  .controller('mapDetailController', ['$scope', 'createMask', function($scope, createMask) {

    // test
    this.initialize = function() {
        _.first($scope.missionCards).selected = true;
    }

    $scope.setCards = function(cards) {
        console.log('setting cards');
        // $scope.cards = $scope.cards;
    }

    $scope.select = function(card) {
        $scope.$emit('tango', [1,2,3]);
        angular.forEach($scope.missionCards, function (eachCard) {
            eachCard.selected = angular.equals(card, eachCard);
        });
    };

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