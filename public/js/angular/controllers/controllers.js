myApp.controller('homeController',  function  ($scope) {
	$scope.produtos = produtos;

	//cadastrar
	$scope.add = function(){
		console.log($scope.produto);
		//unshift
		$scope.produto.data = '1393032898247';
		produtos.unshift($scope.produto);
	}

	//deletar
	$scope.deletar = function(index){
		var indexof = $scope.produtos.indexOf(index);
		console.log(indexof);
		$scope.produtos.splice(indexof, 1);
	}
});
