<?php

$app->get('/home', function(){
	$produtos = new \app\models\produtos();
	$produtosCadastrados = $produtos->listar();

	$toJson = new app\classes\toJson();
	$jsonProdutos = $toJson->multipleJson($produtosCadastrados);
	echo $jsonProdutos;

});