var myApp = angular.module('myApp');
myApp.controller('ProducersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ProducersController loaded...');

	$scope.getProducers = function(){
		$http.get('/api/producers').success(function(response){
			$scope.producers = response;
		});
	}
	$scope.getProducer = function(){
		var id = $routeParams.id;
		$http.get('/api/producers/'+id).success(function(response){
			$scope.producer = response;
		});
	}

	$scope.addProducer = function(){
		$http.post('/api/producers/', $scope.producer).success(function(response){
			window.location.href='#/movies';
		});
	}

	$scope.updateProducer = function(){
		var id = $routeParams.id;
		$http.put('/api/producers/'+id, $scope.producer).success(function(response){
			window.location.href='#/movies';
		});
	}

	$scope.removeProducer = function(id){
		$http.delete('/api/producers/'+id).success(function(response){
			window.location.href='#/movies';
		});
	}
}]);