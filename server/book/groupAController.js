//require files here
var GroupA = require('./GroupAModel.js')

module.exports ={
	insertUser : function (req, res) {
		var ga = req.body
		console.log(ga)
		GroupA.create(ga,function(err,data){
			if (err){
				throw err;
			}else{
				return res.json(data)
			}
		})
	 },

	showUsers: function (req,res){
		GroupA.find(function(err,data){
			if(err){
				throw err;
			}else{
				return res.json(data)
			}
		})
	},

	showUser:function(req,res){
		var name = req.params.name
		var quiry = {name:name}
		GroupA.findOne(quiry, function (err, data) {
			if(err){
				throw err;
			}else{
				return res.json(data)
			}
		})
	}

	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database
}












// app.get('/someUrl/:id', function(req, res){
//     User.findById(req.params.id, function (err, user) {
//         if(user) res.json(user.firstName);
//     });
// });