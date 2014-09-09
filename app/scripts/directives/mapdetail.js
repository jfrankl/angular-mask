'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('angularMaskApp')
  .controller('mapDetailController', ['$scope', function($scope) {

    $scope.cards = $scope.data;

    _.first($scope.cards).selected = true;

    // test
    this.addTab = function(tab) {
        console.log(tab);
    }

    $scope.setCards = function(cards) {
        console.log('setting cards');
        $scope.cards = $scope.data;
    }

    $scope.select = function(card) {
        $scope.$emit('tango', [1,2,3]);
        angular.forEach($scope.cards, function (eachCard) { 
            eachCard.selected = angular.equals(card, eachCard); 
        });
    };

    $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
            console.log("I see a data change!");
            $scope.setCards(newValue);
            _.first($scope.cards).selected = true;
        }
    }, true);

  }])
  .directive('mapDetail', function () {
    return {
        templateUrl: 'scripts/directives/templates/mapDetailTemplate.html',
        scope: {
            data: '='
        },
        controller: 'mapDetailController',
        restrict: 'E',
        link: function postLink(scope, element, attrs, ctrl) {

        }
    };
  });