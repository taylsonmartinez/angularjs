var $=jQuery;

var myApp = angular.module('myApp', ['ngRoute']);

var produtos = [
		{nome: 'Monitor', preco: '15.50', data: "1393032898247"},
		{nome: 'Teclado', preco: '25.50', data: "1393032898247"},
		{nome: 'Placa de Video', preco: '1115.50', data: "1393032898247"}
	];

myApp.config(function($routeProvider){
	
	$routeProvider
	.when('/',{templateUrl: 'app/views/home.html', controller: 'homeController'})
	
});