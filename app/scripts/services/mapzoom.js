'use strict';

/**
 * @ngdoc service
 * @name angularMaskApp.Mapzoomdetail
 * @description
 * # Mapzoomdetail
 * Service in the angularMaskApp.
 */
angular.module('angularMaskApp')
  .service('Mapzoomservice', function Mapzoomdetail(createMask) {
    this.data = [];
    this.mask = "";
    this.importData = function(geojson, e, map) {
      this.data = parseData(geojson);

      this.mask = new createMask(e.layer._latlngs, map).addTo(map);

      this.mask.on('click', function() {
        this.removeMask();
      });

    }
  });

function parseData(data) {
  return {one: data, two: data};
}
