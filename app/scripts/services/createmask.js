'use strict';

/**
 * @ngdoc service
 * @name angularMaskApp.Createmask
 * @description
 * # Createmask
 * Service in the angularMaskApp.
 */
angular.module('angularMaskApp')
  .factory('createMask', function() {
    L.Mask = L.Polygon.extend({
      options: {
        outsideBoundary: [[-90, -360], [90, 360], [90, -360], [-90, 360]],
        stroke: false,
        fillOpacity: 0.8,
        color: '#000',
        clickable: true,
      },
      initialize: function (maskBoundaries) {
        L.Polygon.prototype.initialize.call(this, [this.options.outsideBoundary, maskBoundaries]);
      },
    });
    return L.Mask;
  });


