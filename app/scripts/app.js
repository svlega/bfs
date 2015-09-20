'use strict';

/**
 * @ngdoc overview
 * @name bfsApp
 * @description
 * # bfsApp
 *
 * Main module of the application.
 */
angular
  .module('bfsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/post/:postid', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
