'use strict';

/**
 * @ngdoc service
 * @name angularMaskApp.makeMask
 * @description
 * # makeMask
 * Factory in the angularMaskApp.
 */
angular.module('angularMaskApp')
  .factory('makeMask', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
