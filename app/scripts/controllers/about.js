'use strict';

/**
 * @ngdoc function
 * @name angularMaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMaskApp
 */
angular.module('angularMaskApp')
  .controller('MaskCtrl', function ($scope, $rootScope, $timeout, leafletData, leafletHelpers, geodata, createMask, Mapzoomservice) {
    $scope.maskData = geodata.features[0].properties.related_info.recent_events;

    function standardGeojsonStyle(feature) {
      var eventModels = feature.properties.event_models,
          color = _.max(eventModels, function(model){ return model.weight; }).color;

      return {
        fillColor: color,
        weight: 2,
        color: color,
        opacity: 1,
        fillOpacity: 0.6
      };
    }

    function maskGeojsonStyle(color) {
        return {
            fillOpacity: 0,
            weight: 5,
            stroke: color
        }
    }

    function mapGeoJson() {
      $scope.geojson = {
        data: geodata,
        style: standardGeojsonStyle,
        // filter: function (feature) {
        //     return feature.properties.show;
        // },
        // onEachFeature: onEachFeature
      }
    };

    $scope.displayDetailCard = false;

    $rootScope.$on('mapDetails.markersGenerate', function(event, markers) {
        addMarkers(markers);
    })

    function addMarkers(markers) {
        $scope.markers = [];
        angular.forEach(markers, function(marker) {
            $scope.markers.push(marker);
        })
    }

    function onGeojsonClick(map, recentEvents, latlngs, color, target) {
        $scope.maskData = recentEvents;
        $scope.previousView = [map.getCenter(), map.getZoom()];
        $scope.displayDetailCard = true;
        $scope.mask = new createMask(latlngs, map).addTo(map);
        target.setStyle(maskGeojsonStyle(color)).bringToFront();
        $rootScope.$broadcast('addMask', $scope.maskData);
        $timeout(function(){
            $timeout(function(){
                map.fitBounds(latlngs);
            });
            map.invalidateSize(false);
        });
    }

    function onMaskClick(map, mask, color, target) {
        mask.removeMask();
        delete $scope.mask;
        target.setStyle(standardGeojsonStyle(target.feature));
        $scope.displayDetailCard = false;
        map.setView($scope.previousView[0], $scope.previousView[1]);
        $scope.markers = [];
        $timeout(function(){
            console.log('timeout');
           map.invalidateSize(false);
        });
    }

    leafletData.getMap().then(function(map) {

      mapGeoJson();

      $scope.$on('leafletDirectiveMap.geojsonClick', function(target, geojson, e){

        var latlngs = e.layer._latlngs,
            recentEvents = geojson.properties.related_info.recent_events,
            eventModels = geojson.properties.event_models,
            eventColor = _.max(eventModels, function(model){ return model.weight; }).color,
            target = e.target;

        if ($scope.mask == undefined) {               
            onGeojsonClick(map, recentEvents, latlngs, eventColor, target);
        }

        $scope.mask.on('click', function() {
            onMaskClick(map, this, eventColor, target);
        });

      });

    });

    angular.extend($scope, {
      philadelphia: {
        lat: 38.8913,
        lng: -76.9940,
        zoom: 14
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
      // icons: local_icons,
      defaults: {
        scrollWheelZoom: false
      }
    });


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


  });