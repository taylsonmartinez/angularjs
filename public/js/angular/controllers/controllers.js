myApp.controller('produtosController',  function  ($scope) {
	var produtos = [
		{nome: 'Monitor', preco: '15.50', data: "1393032898247"},
		{nome: 'Teclado', preco: '25.50', data: "1393032898247"},
		{nome: 'Placa de Video', preco: '1115.50', data: "1393032898247"}
	];
	$scope.produtos = produtos;
});
