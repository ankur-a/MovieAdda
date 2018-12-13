const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

 
var Actor =require('./models/actor');
var Producer = require('./models/producers');
var Movie = require('./models/movies')

// Connect to Mongoose
mongoose.connect('mongodb://anujdeep:anuj123@ds227459.mlab.com:27459/patient');
var db = mongoose.connection;

app.get('/', (req, res) => {
	// res.send('Please use /api/actors');
	res.redirect('/api/movies');
});

//routes for actros

app.get('/api/actors', (req, res) => {
	Actor.getActors((err, actors) => {
		if(err){
			throw err;
		}
		res.json(actors);
	});
});

app.get('/api/actors/:_id', (req, res) => {
	Actor.getActorById(req.params._id, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});


app.post('/api/actors', (req, res) => {
	var actor = req.body;
	Actor.addActor(actor, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});

app.put('/api/actors/:_id', (req, res) => {
	var id = req.params._id;
	var actor = req.body;
	Actor.updateActor(id,actor, {}, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});

app.delete('/api/actors/:_id', (req, res) => {
	var id = req.params._id;
	Actor.removeActor(id, (err, actor) => {
		if(err){
			throw err;
		}
		res.json(actor);
	});
});

//routes for movie

app.post('/api/movies', (req, res) => {
	var moviename = req.body.name;
	var plot = req.body.plot;
	var yera_of_release = req.body.yera_of_release; 
	var producername = req.body.producername;
	var member = req.body.member;
	var information = req.body.information;
	var count = 0;
	for (var i in member) {
    	if (member.hasOwnProperty(i)) {
        	count++;
    	}
	} 
	var arr=[];
	for(var i = 0 ; i< count;i++){
		// var obj = {};
		// obj.name = member[i];
		arr.push(member[i]);
	} 
 	var movie = new Movie({
	 	name : moviename,
	 	plot : plot,
	 	yera_of_release : yera_of_release,
	 	producername : producername,
	 	information : information,
	 	actorname : arr	
 	});
		 
	Movie.addMovie(movie, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.get('/api/movies', (req, res) => {
	Movie.getMovies((err, movies) => {
		if(err){
			throw err;
		}
		res.json(movies);
	});
});

app.get('/api/movies/:_id', (req, res) => {
	Movie.getMovieById(req.params._id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.delete('/api/movies/:_id', (req, res) => {
	var id = req.params._id;
	Movie.removeMovie(id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});


//routes for producers

app.post('/api/producers', (req, res) => {
	var producer = req.body;
	Producer.addProducer(producer, (err, producer) => {
		if(err){
			throw err;
		}
		res.json(producer);
	});
});

app.get('/api/producers', (req, res) => {
	Producer.getProducers((err, producers) => {
		if(err){
			throw err;
		}
		res.json(producers);
	});
});

app.get('/api/producers/:_id', (req, res) => {
	Producer.getProducerById(req.params._id, (err, producer) => {
		if(err){
			throw err;
		}
		res.json(producer);
	});
});

app.put('/api/producers/:_id', (req, res) => {
	var id = req.params._id;
	var producer = req.body;
	Producer.updateProducer(id,producer, {}, (err, producer) => {
		if(err){
			throw err;
		}
		res.json(producer);
	});
});

app.delete('/api/producers/:_id', (req, res) => {
	var id = req.params._id;
	Producer.removeProducer(id, (err, producer) => {
		if(err){
			throw err;
		}
		res.json(producer);
	});
});

//end of producers routers

http.listen(process.env.PORT || 3000,function(){
	console.log('listening on', http.address().port);
});

