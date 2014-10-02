myApp.controller('homeController',  function  ($scope, $http, ngTableParams ) {
	
	$http.get('/app/home').success(function(data){
		produtos = data;
		$scope.produtos = produtos;

	//paginação
	    	$scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        count: 3           // count per page
	    	}, {
	        //total: data.length, 
	        getData: function($defer, params) {
	            $defer.resolve(produtos.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    	});
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
