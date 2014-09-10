'use strict';

/**
 * @ngdoc service
 * @name angularMaskApp.Createmask
 * @description
 * # Createmask
 * Service in the angularMaskApp.
 */
angular.module('angularMaskApp')
  .factory('createMask', ['leafletData', 'leafletHelpers', function (leafletData, leafletHelpers) {
    L.Mask = L.Polygon.extend({
      options: {
        outsideBoundary: [[-90, -360], [90, 360], [90, -360], [-90, 360]],
        stroke: false,
        fillOpacity: 0.5,
        color: '#000',
        clickable: true,
        layer: 'selectedMission',
        map: []
      },
      initialize: function (maskBoundaries, map) {
        this.options.map = map;
        L.Polygon.prototype.initialize.call(this, [this.options.outsideBoundary, maskBoundaries]);
      },
    });
    L.Mask.prototype.removeMask = function() {
      this.options.map.removeLayer(this);
    }
    return L.Mask;
  }]);


