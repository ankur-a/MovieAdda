const mongoose = require('mongoose');

// Movies Schema
const moviesSchema = mongoose.Schema({
	 
	plot:{
		type: String
	},	 	 
	name:{
		type: String,
		index : true,
		required: true,
		uppercase: true
	},	 	 	 
	yera_of_release:{
		type: Date
	},
	producername : {
		type : String,
		uppercase: true
	},
	actorname : [{type: String,uppercase: true}],

	image_url:{
		type: String,
		default: "http://images2.fanpop.com/image/photos/9400000/Batman-and-Dent-the-dark-knight-9437000-1261-762.jpg"
	},
	information : {
		type : String
	}	
});

 

const Movies = module.exports = mongoose.model('Movies', moviesSchema);

// Get Movies
module.exports.getMovies = (callback, limit) => {
	Movies.find(callback).limit(limit);
}

// Get Movies
module.exports.getMovieById = (id, callback) => {
	Movies.findById(id, callback);
}

 
  
// Add Movies
module.exports.addMovie = (movie, callback) => {
	Movies.create(movie, callback);
}



// Delete Movies
module.exports.removeMovie = (id, callback) => {
	var query = {_id: id};
	Movies.remove(query, callback);
}



