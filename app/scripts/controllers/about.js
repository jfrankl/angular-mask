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

	function getColor(eventModels) {
		return _.max(eventModels, function(model){ return model.weight; }).color;
	}

	function standardGeojsonStyle(feature) {
	  var eventModels = feature.properties.event_models,
		  color = getColor(eventModels);

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
		style: standardGeojsonStyle,
	  }
	};

	showMapDetail(false); // This can get erased!

	$rootScope.$on('mapDetails.markersGenerate', function(event, markers) {
		addMarkers(markers);
	})

	function maskGeojsonStyle(color) {
		return {
			fillOpacity: 0,
			weight: 5,
			stroke: color
		}
	}

	function addMarkers(markers) {
		resetMarkers();
		angular.forEach(markers, function(marker) {
			$scope.markers.push(marker);
		})
	}

	function resetMarkers() {
		$scope.markers = [];
	}

	function showMapDetail(bool) {
		$scope.displayDetailCard = bool;
	}

	function newMask(latlngs, target) {
		leafletData.getMap().then(function(map) {
			$scope.mask = new createMask(latlngs);
			$scope.mask.on('click', function() {
				closeMapDetailMode(target);
			});
			map.addLayer($scope.mask);
		});
	}

	function openMapDetailMode(target, geojson, e) {
	  var latlngs = e.layer._latlngs, recentEvents = geojson.properties.related_info.recent_events, eventModels = geojson.properties.event_models, color = _.max(eventModels, function(model){ return model.weight; }).color, target = e.target;
	  showMapDetail(true);
		$scope.maskData = recentEvents;
		leafletData.getMap().then(function(map) {
			$scope.previousMapState = {
				center: map.getCenter(), 
				zoom: map.getZoom()
			};
			newMask(latlngs, target);
			$timeout(function(){
				map.fitBounds(latlngs).invalidateSize();
			});
		});
		target.setStyle(maskGeojsonStyle(color)).bringToFront();
	}

	function closeMapDetailMode(target) {
		resetMarkers();
		showMapDetail(false);
		target.setStyle(standardGeojsonStyle(target.feature));
		leafletData.getMap().then(function(map) {
			map.setView($scope.previousMapState.center, $scope.previousMapState.zoom).removeLayer($scope.mask);
			$timeout(function(){
				delete $scope.mask;
				map.invalidateSize(false);
			});
		});
	}

	leafletData.getMap().then(function(map) {
	  mapGeoJson();
	});

	$scope.$on('leafletDirectiveMap.geojsonClick', function(target, geojson, e){
		if (typeof $scope.mask === 'undefined') {
		  openMapDetailMode(target, geojson, e);
	  }
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