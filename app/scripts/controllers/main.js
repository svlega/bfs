'use strict';

/**
 * @ngdoc function
 * @name bfsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bfsApp
 */
angular.module('bfsApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 console.log("Blog Controller begins");


  $http.get('http://jsonplaceholder.typicode.com/posts/').success(function(resposts) {
    console.log("I got the data I requested");
	console.log(resposts);   	
	$scope.postlist = resposts;	
  });

  });
