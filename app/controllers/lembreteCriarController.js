var module = angular.module('lembrete') ;

//Criação do Controller
module.controller('',['$scope','$http',lembreteCriarController]);

function lembreteCriarController('$scope','$http'){

	$scope.salvar = function(){
		console.log("chamei a função correta");		
	}

}

Link do Curso 
https://www.devmedia.com.br/view/viewaula.php?idcomp=37230