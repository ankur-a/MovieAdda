 var myApp = angular.module('myApp');

myApp.controller('ActorsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ActorsController loaded...');

	$scope.getActors = function(){
		$http.get('/api/actors').success(function(response){
			$scope.actors = response;
		});
	}

	$scope.getActor = function(){
		var id = $routeParams.id;
		$http.get('/api/actors/'+id).success(function(response){
			$scope.actor = response;
		});
	}

	$scope.addActor = function(){
		$http.post('/api/actors/', $scope.actor).success(function(response){
			window.location.href='#/movies';
		});
	}

	$scope.updateActor = function(){
		var id = $routeParams.id;
		$http.put('/api/actors/'+id, $scope.actor).success(function(response){
			window.location.href='#/movies';
		});
	}

	$scope.removeActor = function(id){
		$http.delete('/api/actors/'+id).success(function(response){
			window.location.href='#/movies';
		});
	}
}]);