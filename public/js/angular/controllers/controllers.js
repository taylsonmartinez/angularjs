function produtosController($scope){
	var produtos = [
		{nome: 'Monitor', preco: '15.50'},
		{nome: 'Teclado', preco: '25.50'},
		{nome: 'Placa de Video', preco: '1115.50'}
	];
	
	$scope.produtos = produtos;
}