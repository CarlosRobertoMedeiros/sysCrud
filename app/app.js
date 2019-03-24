var module = angular.module('lembrete', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/criar', {
			controller:'controller/lembreteCriarController.js',
			templateUrl:'view/lembreteCriarView.html'
		});

		/*.when('/criar',{
			controller:'lembreteCriarController',
			templateUrl:'view/criar.html'
		});*/

}]);
