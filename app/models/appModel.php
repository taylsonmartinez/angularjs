<?php

namespace app\models;

class appModel extends \ActiveRecord\Model{

	public function listar(){
		return parent::find('all');
	}

}