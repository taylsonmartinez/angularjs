myApp.controller('homeController',  function  ($scope, $http, ngTableParams, numeroRegistros ) {


	$http.get('/app/home').success(function(data){
		produtos = data;
		$scope.produtos = produtos;

		paginacao($scope,ngTableParams,produtos,5);

    	if(numeroRegistros.semRegistro(produtos)){
    		$("#mensagem-status").show('fast');
				$("#mensagem-status").html('Sem registros');
			}

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

		var date = new Date();
		dateTime = date.getTime();
		$scope.produto_cadastrar.tb_produtos_data = dateTime;

		$http.post('/app/cadastrar',$scope.produto_cadastrar).success(function(data){
			produtos.unshift(data);
			$scope.tableParams.reload();

				$scope.cadastrar = false;
				$scope.produto_cadastrar = '';

				console.log(data);

			if(data.id !== 0 && data.id !== undefined){
				  $("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Cadastrado com sucesso');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}else{
   			 $("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-danger');
					$("#mensagem-status").html('Erro ao cadastrar registro');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-danger');
					$("#mensagem-status").hide('fast');
				},2000);
			}

		});
	}

	//deletar
	$scope.deletar = function(index){
		$http.delete('app/deletar/'+index.id).success(function(data){
			if(data === 'deletou'){

					var indexof = produtos.indexOf(index);
					produtos.splice(indexof,1);
					$scope.tableParams.reload();//atualizar a tabela

					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Deletado com sucesso');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}else{
					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Erro ao deletar');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}
		});
	}


});

myApp.controller('editarProdutoController', function($scope,$routeParams,$http){
	$http.get('/app/atualizar/'+$routeParams.id).success(function(data){
		$scope.produto_editar = data;
	});

	//atualizar
	$scope.atualizar = function(index){
		$http.put('/app/atualizar',index).success(function(data){
			if(data === 'atualizou'){
					$("#mensagem-status-atualizar").show('fast');
					$("#mensagem-status-atualizar").addClass('alert alert-success');
					$("#mensagem-status-atualizar").html('Atualizado com sucesso');
				setTimeout(function(){
					$("#mensagem-status-atualizar").removeClass('alert alert-success');
					$("#mensagem-status-atualizar").hide('fast');
				},2000);
			}else{
					$("#mensagem-status-atualizar").show('fast');
					$("#mensagem-status-atualizar").addClass('alert alert-danger');
					$("#mensagem-status-atualizar").html('Erro ao atualizar registro');

				setTimeout(function(){
					$("#mensagem-status-atualizar").removeClass('alert alert-danger');
					$("#mensagem-status-atualizar").hide('fast');
				},2000);
			}
		});
	}

});
