var mongoose = require('mongoose');

var GroupASchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	scoor:{
		type:String,
		required:true
	}
});

var GroupA = mongoose.model('GroupA', GroupASchema);

module.exports = GroupA; 