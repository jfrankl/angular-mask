'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('ng')
  .controller('mapDetailController', ['$scope', '$rootScope', 'createMask', function($scope, $rootScope, createMask) {

    var local_icons = {
      div_icon: {
        type: 'div',
        className: 'count-icon',
        html: htmlIconTemplate(1),
        opacity: 0.85,
        color: '#000',
        iconSize: [40, 40]
      },
    };

    this.select = function(card) {
        angular.forEach($scope.missionCards, function(d, key) {
            d.selected = angular.equals(card, d);
        });
        var markers = generateMarkers(card);
        $rootScope.$emit('mapDetails.markersGenerate', markers);
    };

    var that = this;

    $scope.$watch("missionCards", function(newValue, oldValue) {
        console.log(newValue, oldValue);
        if (typeof newValue !== 'undefined' && newValue !== oldValue) {
            that.select(_.first(newValue));
        };
    });

    $scope.isSelected = function(card) {
        console.log('isSelected');
        return angular.equals(card, $scope.selected);
    }

    function generateMarkers(card) {
        console.log('generateMarkers');
        var data = card.data,
            markers = [];
        angular.forEach(data, function(d, key) {
          updateIcon(local_icons.div_icon, key + 1);
          markers.push({
              lat: d.location[1],
              lng: d.location[0],
              message: 'My FUNNN Marker Temporary',
              layer: 'selectedMission',
              icon: angular.copy(local_icons.div_icon)
          });
        })
        return markers;
    }

    function updateIcon(icon, value) {
      icon['html'] = htmlIconTemplate(value);
    }

    function htmlIconTemplate(value) {
      return '<div class="bount-icon" style="background-color: #FF5500">'+value+'<div>'
    }

  }])
  .directive('mapDetail', function () {
    return {
        templateUrl: 'scripts/directives/templates/mapDetailTemplate.html',
        scope: {
            missionCards: '=',
            map: '='
        },
        transclude: true,
        controller: 'mapDetailController',
        restrict: 'E'
    };
  });