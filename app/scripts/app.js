'use strict';

angular.module('slideshowApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/views', {
        templateUrl: 'views/slideshowimg.html',
        controller: 'PortfolioCtrl'
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
      }).
        when('/slideshowimg', {
        templateUrl: 'views/slideshowimg.html',
        controller: 'PortfolioCtrl'
      }).
        otherwise({
        redirectTo: '/'
      });
  });