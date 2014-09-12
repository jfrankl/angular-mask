'use strict';

/**
 * @ngdoc directive
 * @name angularMaskApp.directive:mapDetail
 * @description
 * # mapDetail
 */
angular.module('angularMaskApp')
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

    $scope.select = function(card) {
        console.log('select');
        $scope.selected = card;
        var markers = generateMarkers(card);
        $rootScope.$emit('mapDetails.markersGenerate', markers);
    };

    $rootScope.$on('addMask', function(event, mask) {
        $scope.select(_.first(mask));
    })

    $scope.isSelected = function(card) {
        return angular.equals(card, $scope.selected);
    }

    function generateMarkers(card) {
        var data = card.data,
            markers = [];
        console.log(local_icons);
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
        controller: 'mapDetailController',
        restrict: 'E',
        link: function postLink(scope, element, attrs, ctrl) {

        }
    };
  });