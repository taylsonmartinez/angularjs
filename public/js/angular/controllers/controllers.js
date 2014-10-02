myApp.controller('homeController',  function  ($scope, $http, ngTableParams ) {
	
	$http.get('/app/home').success(function(data){
		produtos = data;
		$scope.produtos = produtos;

	    	paginacao($scope,ngTableParams,produtos,5);
	});

	//cadastrar
	$scope.add = function(){
		console.log($scope.produto);
		//unshift
		$scope.produto.data = '1393032898247';
		produtos.unshift($scope.produto);
	};

	//deletar
	$scope.deletar = function(index){
		var indexof = $scope.produtos.indexOf(index);
		console.log(indexof);
		$scope.produtos.splice(indexof, 1);
	};
});

myApp.controller('produtoController', function($scope, $routeParams){
	console.log($routeParams.id);
	$scope.idProduto = $routeParams.id;
});
