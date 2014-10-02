var $=jQuery;
var myApp = angular.module('myApp', ['ngRoute', 'ngTable']);

var produtos = [];

myApp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{templateUrl: 'app/views/home.html', controller: 'homeController'})
	.when('/produto/:id',{templateUrl: 'app/views/produto.html', controller: 'produtoController'})
	
});

myApp.filter('capitalize', function(){
	return function(input, scope){
		input = input.toLowerCase();
		return input.substr(0, 1).toUpperCase()+input.substr(1);
	};
});