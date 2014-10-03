myApp.controller('homeController',  function  ($scope, $http, ngTableParams ) {

	$http.get('/app/home').success(function(data){
		produtos = data;
		$scope.produtos = produtos;

	    	paginacao($scope,ngTableParams,produtos,5);
	});

	//edit
	$scope.edit = function(index){
		$scope.tr_edit = true;
		$scope.produto_editar = index;
	};

	//atualizar
	$scope.atualizar = function(index){
		$http.put('/app/atualizar',index).success(function(data){
			if(data === 'atualizou'){
					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Atualizado com sucesso');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}else{
					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-danger');
					$("#mensagem-status").html('Erro ao atualizar registro');

				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-danger');
					$("#mensagem-status").hide('fast');
				},2000);
			}
		});
	}


	//edit
	$scope.cancelar = function(){
		$scope.tr_edit = false;
	};

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
