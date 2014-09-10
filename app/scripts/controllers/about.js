'use strict';

/**
 * @ngdoc function
 * @name angularMaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMaskApp
 */
angular.module('angularMaskApp')
  .controller('MaskCtrl', function ($scope, $rootScope, leafletData, leafletHelpers, geodata, createMask, Mapzoomservice) {
    $scope.maskData = geodata.features[0].properties.related_info.recent_events;
    console.log("tile");
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

    // function onEachFeature(feature, layer) {
    //   var safeApply = leafletHelpers.safeApply, isDefined = leafletHelpers.isDefined, leafletScope = $scope, leafletGeoJSON = {};
    //   layer.on({
    //     click: function (e) {
    //       safeApply(leafletScope, function () {
    //         var geojson = feature;
    //         $rootScope.$broadcast('leafletDirectiveMap.geojsonClick', geojson, e);
    //       });
    //     },
    //   });
    // }

    function style(feature) {
      var color = feature.properties.event_models[0].color;
      return {
        fillColor: color,
        weight: 2,
        color: color,
        opacity: 1,
        fillOpacity: 0.6
      };
    }

    function mapGeoJson() {
      $scope.geojson = {
        data: geodata,
        style: style,
        // filter: function (feature) {
        //     return feature.properties.show;
        // },
        // onEachFeature: onEachFeature
      }
    };

    $rootScope.$on('selectCard', function(event, card) {
        var data = card.data;
        $scope.markers = [];
        angular.forEach(data, function(d, key) {
          updateIcon(local_icons.div_icon, key + 1);
          console.log($scope.markers);
          $scope.markers.push({
              lat: d.location[1],
              lng: d.location[0],
              message: 'My Added Marker Temporary',
              layer: 'selectedMission',
              icon: angular.copy(local_icons.div_icon)
          });
          console.log($scope.markers);
        })
    })

    leafletData.getMap().then(function(map) {

      $scope.map = map;

      mapGeoJson();

      $scope.$on('leafletDirectiveMap.geojsonClick', function(target, geojson, e){
        
        if ($scope.mask == undefined) {
            var latlngs = e.layer._latlngs,
                recentEvents = geojson.properties.related_info.recent_events;
            onGeojsonClick(map, recentEvents, latlngs);
            $rootScope.$broadcast('addMask', $scope.maskData);
        }

        $scope.mask.on('click', function() {
            onMaskClick(this);
        });

      });

      // angular.forEach(target.feature.properties.missions, function(value, key) {
      //   updateIcon(local_icons.div_icon, key + 1);
      //   $scope.markers.push({
      //       lat: value.location[1],
      //       lng: value.location[0],
      //       message: 'My Added Marker Temporary',
      //       layer: 'selectedMission',
      //       icon: angular.copy(local_icons.div_icon)
      //   });
      // })

    function onGeojsonClick(map, recentEvents, latlngs) {
        $scope.maskData = recentEvents;
        $scope.previousView = [map.getCenter(), map.getZoom()];
        map.fitBounds(latlngs);
        $scope.mask = new createMask(latlngs, map).addTo(map);
    }

    function onMaskClick(mask) {
        mask.removeMask();
        map.setView($scope.previousView[0], $scope.previousView[1]);
        $scope.mask = undefined;
    }

      function focusOnMission(geojson, e) {

        // target.setStyle({
        //   fillOpacity: 0,
        //   weight: 0
        // });

        // angular.forEach(target.feature.properties.missions, function(value, key) {
        //   updateIcon(local_icons.div_icon, key + 1);
        //   $scope.markers.push({
        //       lat: value.location[1],
        //       lng: value.location[0],
        //       message: 'My Added Marker Temporary',
        //       layer: 'selectedMission',
        //       icon: angular.copy(local_icons.div_icon)
        //   });
        // })

        // $scope.demoMask = new createMask(target._latlngs).addTo(map);

        // $scope.demoMask.on('click', function(e) {
        //   $scope.markers = [];
        //   map.removeLayer(this);
        //   target.setStyle({
        //     fillOpacity: 0.6,
        //     weight: 0
        //   });
        //   resetZoom();
        // });

      }

    });












    angular.extend($scope, {
      philadelphia: {
        lat: 38.8913,
        lng: -76.9940,
        zoom: 13
      },
      geojson: {
      },
      layers: {
        baselayers: {
          stamen: {
            name: 'Stamen Toner',
            type: 'xyz',
            url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
            layerOptions: {
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
            }
          },
          osm: {
            name: 'OpenStreetMap',
            type: 'xyz',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            layerOptions: {
              subdomains: ['a', 'b', 'c'],
              attribution: '© OpenStreetMap contributors',
              continuousWorld: true
            }
          },
          cycle: {
            name: 'OpenCycleMap',
            type: 'xyz',
            url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
            layerOptions: {
              subdomains: ['a', 'b', 'c'],
              attribution: '© OpenCycleMap contributors - © OpenStreetMap contributors',
              continuousWorld: true
            }
          },
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