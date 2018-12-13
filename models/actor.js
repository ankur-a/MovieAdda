const mongoose = require('mongoose');

// Actors Schema
const actorSchema = mongoose.Schema({
	 
	bio:{
		type: String
	}, 	 	 
	name:{
		type: String,
		index : true,
		required: true,
		uppercase: true
	},	 	 	 
	sex:{
		type : String
	},
	phone : {
		type : Number
	},
	dob:{
		type: Date,
		required: true
	},
    image_url:{
		type: String,
		default: "http://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png"
	}

});

 

const Actor = module.exports = mongoose.model('Actor', actorSchema);

// Get Actors
module.exports.getActors = (callback, limit) => {
	Actor.find(callback).limit(limit);
}

// Get Actor
module.exports.getActorById = (id, callback) => {
	Actor.findById(id, callback);
}

 
  
// Add Actors
module.exports.addActor = (actor, callback) => {
	Actor.create(actor, callback);
}

// Update Actors
module.exports.updateActor = (id, actor, options, callback) => {
	var query = {_id: id};
	var update = {
		sex: actor.sex,
		bio: actor.bio,
		name: actor.name,
		dob: actor.dob, 
	}
	Actor.findOneAndUpdate(query, update, options, callback);
}

// Delete Actors
module.exports.removeActor = (id, callback) => {
	var query = {_id: id};
	Actor.remove(query, callback);
}



