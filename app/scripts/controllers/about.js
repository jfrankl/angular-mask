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
  .controller('MaskCtrl', function ($scope, $rootScope, leafletData, leafletHelpers) {

    var geodata = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            'show': true,
            'color': '#201872',
            'missions': []
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -75.15296459197998,
                  39.945607977851836
                ],
                [
                  -75.15296459197998,
                  39.94763137379424
                ],
                [
                  -75.1504111289978,
                  39.94763137379424
                ],
                [
                  -75.1504111289978,
                  39.945607977851836
                ],
                [
                  -75.15296459197998,
                  39.945607977851836
                ]
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            'show': true,
            'color': '#9C82FB',
            'missions': [
              {
                location: [
                  -75.14733731746674,
                  39.94571901942505
                ],
                title: 'A Bad Thing'
              },
              {
                location: [
                  -75.14790408531189,
                  39.94550104875913
                ],
                title: 'Another Bad Thing'
              },
              {
                location: [
                  -75.14697253704071,
                  39.94448955477134
                ],
                title: 'A Third Bad Thing'
              },
              {
                location: [
                  -75.14454553704071,
                  39.94528955477134
                ],
                title: 'A Third Bad Thing'
              }
            ]
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -75.14787912368774,
                  39.94392999436212
                ],
                [
                  -75.14787912368774,
                  39.946183747016605
                ],
                [
                  -75.14489650726318,
                  39.946183747016605
                ],
                [
                  -75.14489650726318,
                  39.94392999436212
                ],
                [
                  -75.14787912368774,
                  39.94392999436212
                ]
              ]
            ]
          }
        }
      ]
    };

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

    function onEachFeature(feature, layer) {
      var safeApply = leafletHelpers.safeApply, isDefined = leafletHelpers.isDefined, leafletScope = $scope, leafletGeoJSON = {};
      layer.on({
        click: function (e) {
          safeApply(leafletScope, function () {
            var geojson = feature;
            $rootScope.$broadcast('leafletDirectiveMap.geojsonClick', geojson, e);
          });
        },
      });
    }

    function style(feature) {
      return {
        fillColor: "red",
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      };
    }

    function mapGeoJson() {
      $scope.geojson = {
        data: geodata,
        style: style,
        filter: function (feature) {
            return feature.properties.show;
        },
        // onEachFeature: onEachFeature
      }
    };

    function resetZoom() {
      // This is just a filler function; we should plug in however the extent
      // is determined when the map page loads
      angular.extend($scope, {
        philadelphia: {
          lat: 39.94817,
          lng: -75.14856,
          zoom: 13
        },
      });
    }

    leafletData.getMap().then(function(map) {

      function focusOnMission(geojson, e) {
        var target = e.target;

        map.fitBounds(target._latlngs);

        target.setStyle({
          fillOpacity: 0
        });

        angular.forEach(target.feature.properties.missions, function(value, key) {
          console.log('111111!!!');
          updateIcon(local_icons.div_icon, key + 1);
          console.log(value.location[0], value.location[1]);
          $scope.markers.push({
              lat: value.location[1],
              lng: value.location[0],
              message: 'My Added Marker Temporary',
              layer: 'selectedMission',
              icon: angular.copy(local_icons.div_icon)
          });
          console.log($scope.markers, 'new marker scope');
        })

        $scope.demoMask = L.mask(target._latlngs).addTo(map);
        $scope.demoMask.on('click', function(e) {
          $scope.markers = [];
          map.removeLayer(this);
          target.setStyle({
            fillOpacity: 0.7
          });
          resetZoom();
        });
        
      }

      $scope.$on('leafletDirectiveMap.geojsonClick', function(target, geojson, e){
        console.log('target', target, 'geojson', geojson, 'event', e);
        focusOnMission(geojson, e);
      });

      mapGeoJson();

    });

    angular.extend($scope, {
      philadelphia: {
        lat: 39.94817,
        lng: -75.14856,
        zoom: 13
      },
      geojson: {
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

    console.log(421, $scope.geojson);

  });