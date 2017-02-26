//implement model here
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

var GroupB = mongoose.model('GroupB', GroupASchema);

module.exports = GroupB;