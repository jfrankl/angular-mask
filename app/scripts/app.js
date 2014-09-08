'use strict';

/**
 * @ngdoc overview
 * @name angularMaskApp
 * @description
 * # angularMaskApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
