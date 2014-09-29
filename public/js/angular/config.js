var $=jQuery;

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{templateUrl: 'app/views/home.html', controller: 'homeController'})
	
});