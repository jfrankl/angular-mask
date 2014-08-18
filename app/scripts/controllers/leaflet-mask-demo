'use strict';

/**
 * @ngdoc function
 * @name angularMaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMaskApp
 */
angular.module('angularMaskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('MaskCtrl', function ($scope, leafletData) {

    var red = [[39.9487910981458,-75.14859795570374],[39.950871972692845,-75.16373634338379],[39.9406068075672,-75.16545295715332],[39.94126487717428,-75.1791000366211],[39.93422320394703,-75.18013000488281],[39.93093245403986,-75.15008926391602],[39.9487910981458,-75.14859795570374]];

    var blue = [[40.9987910981458,-75.14859795570374],[39.950871972692845,-75.16373634338379],[39.9406068075672,-75.16545295715332],[39.94126487717428,-75.1791000366211],[39.93422320394703,-75.18013000488281],[39.93093245403986,-75.15008926391602],[39.9487910981458,-75.14859795570374]];

    L.Mask = L.Polygon.extend({
      options: {
        outsideBoundary: [[-90, -360], [90, 360], [90, -360], [-90, 360]],
        stroke: false,
        fillOpacity: 0.5,
        color: '#000',
        clickable: true,
        layer: 'selectedMission'
      },

      initialize: function (maskBoundaries, options) {
        L.Polygon.prototype.initialize.call(this, [this.options.outsideBoundary, maskBoundaries], options);
      },

    });

    L.mask = function(maskBoundaries, options) {
      return new L.Mask(maskBoundaries, options);
    };

    function updateIcon(icon, value) {
      icon['html'] = htmlIconTemplate(value);
    }

    function htmlIconTemplate(value) {
      return '<div class="bount-icon" style="background-color: #FF5500">'+value+'<div>'
    }

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


    leafletData.getMap().then(function(map) {

      // map.fitBounds(red);

      // var demoMask = L.mask(red).addTo(map);

      // demoMask.on('click', function(e) {
      //   console.log(e);
      // });

      updateIcon(local_icons.div_icon, 3);

      $scope.markers.push({
          lat: 39.94817,
          lng: -75.14856,
          message: 'My Added Marker Temporary',
          layer: 'selectedMission',
          icon: angular.copy(local_icons.div_icon)
      });

      updateIcon(local_icons.div_icon, 4);

      $scope.markers.push({
          lat: 39.94817,
          lng: -75.16856,
          message: "My Added Marker Perm",
          icon: local_icons.div_icon
      });

      console.log(1, $scope.markers);

    });

    angular.extend($scope, {
      philadelphia: {
        lat: 39.94817,
        lng: -75.14856,
        zoom: 10
      },
      layers: {
        baselayers: {
          osm: {
            name: 'OpenStreetMap',
            type: 'xyz',
            url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
            layerOptions: {
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
            }
          }
        },
        overlays: {
          selectedMission: {
            type: 'group',
            name: 'selectedMission',
            visible: true
          },
        }
      },
      markers: [],
      icons: local_icons,
      defaults: {
        scrollWheelZoom: false
      }
    });
  });