//require the model here
var GroupB = require('./GroupBModel.js')

module.exports ={
	showUsers : function (req, res) {
		GroupB.find(function(err,data){
			if(err){
				throw err;
			}else{
				return res.json(data)
			}
		})
	
	},
	insertUsers : function (req, res) {
		//var ga = req.body
		//var arr = []
		//console.log(ga)
		for (var i = 0 ; i < req.body.length; i++) {
			//var obj = ga[i]
			GroupB.create(req.body[i],function(err,data){
				if (err){
					throw err;
				}else{
					console.log(data)
					//arr.push(req.body[i])
				}
			})
		}
			res.json(req.body) 
	 },

	showUser:function(req,res){
		var name = req.params.name
		var quiry = {name:name}
		GroupB.findOne(quiry, function (err, data) {
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

	