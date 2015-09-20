'use strict';

/**
 * @ngdoc function
 * @name bfsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bfsApp
 */
angular.module('bfsApp')
  .controller('PostCtrl', function ($scope, $http, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.param = $routeParams.param;
	console.log("Post Controller begins - "+$routeParams.postid);
	
	$http.get('http://jsonplaceholder.typicode.com/posts/'+$routeParams.postid).success(function(respost) {
		console.log(respost);   	
		$scope.post = respost;	
		$http.get('http://jsonplaceholder.typicode.com/posts/'+$routeParams.postid+'/comments/').success(function(rescomments) {
		console.log('comments:'+rescomments);   	
		$scope.comments = rescomments;	
	});
	});
  });

