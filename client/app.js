var myApp = angular.module('myApp',['ngRoute']);

//For Actor
myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'MoviesController',
		templateUrl: 'views/movie/movies.html'
	})
	.when('/actors', {
		controller:'ActorsController',
		templateUrl: 'views/actor/actors.html'
	})
	.when('/actors/details/:id',{
		controller:'ActorsController',
		templateUrl: 'views/actor/actor_details.html'
	})
	.when('/actors/add',{
		controller:'ActorsController',
		templateUrl: 'views/actor/add_actor.html'
	})
	.when('/actors/edit/:id',{
		controller:'ActorsController',
		templateUrl: 'views/actor/edit_actor.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});


//Fo Producer
myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'MoviesController',
		templateUrl: 'views/movie/movies.html'
	})
	.when('/producers', {
		controller:'ProducersController',
		templateUrl: 'views/producer/producers.html'
	})
	.when('/producers/details/:id',{
		controller:'ProducersController',
		templateUrl: 'views/producer/producer_details.html'
	})
	.when('/producers/add',{
		controller:'ProducersController',
		templateUrl: 'views/producer/add_producer.html'
	})
	.when('/producers/edit/:id',{
		controller:'ProducersController',
		templateUrl: 'views/producer/edit_producer.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});


//For Movies
myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'MoviesController',
		templateUrl: 'views/movie/movies.html'
	})
	.when('/movies', {
		controller:'MoviesController',
		templateUrl: 'views/movie/movies.html'
	})
	.when('/movies/details/:id',{
		controller:'MoviesController',
		templateUrl: 'views/movie/movie_details.html'
	})
	.when('/movies/add',{
		controller:'MoviesController',
		templateUrl: 'views/movie/add_movie.html'
	})
	.when('/movies/edit/:id',{
		controller:'MoviesController',
		templateUrl: 'views/movie/edit_movie.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});