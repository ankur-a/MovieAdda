const mongoose = require('mongoose');

// Actors Schema
const producerSchema = mongoose.Schema({
	 
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

 

const Producer = module.exports = mongoose.model('Producer', producerSchema);

// Get Producers
module.exports.getProducers = (callback, limit) => {
	Producer.find(callback).limit(limit);
}

// Get Producer
module.exports.getProducerById = (id, callback) => {
	Producer.findById(id, callback);
}
  
// Add Producer
module.exports.addProducer = (producer, callback) => {
	Producer.create(producer, callback);
}

// Update Producers
module.exports.updateProducer = (id, producer, options, callback) => {
	var query = {_id: id};
	var update = {
		sex: actor.sex,
		bio: actor.bio,
		name: actor.name,
		dob: actor.dob,  
	}
	Producer.findOneAndUpdate(query, update, options, callback);
}

// Delete Producer
module.exports.removeProducer = (id, callback) => {
	var query = {_id: id};
	Producer.remove(query, callback);
}



