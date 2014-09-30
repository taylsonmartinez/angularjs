var $=jQuery;

var myApp = angular.module('myApp', ['ngRoute']);

var produtos = [
		{nome: 'monitor', preco: '15.50', data: "1393032898247"},
		{nome: 'Teclado', preco: '25.50', data: "1393032898247"},
		{nome: 'Placa de Video', preco: '1115.50', data: "1393032898247"}
	];

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