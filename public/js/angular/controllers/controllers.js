myApp.controller('homeController',  function  ($scope) {
	$scope.produtos = produtos;


	//deletar
	$scope.deletar = function(index){
		var indexof = $scope.produtos.indexOf(index);
		console.log(indexof);
		$scope.produtos.splice(indexof, 1);
	}
});
