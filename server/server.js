//require express and mongoose here
var express = require('express')
var mongoose = require('mongoose')
var app = express()

//require your middleware and routes here
var bodyparser = require('body-parser')
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app,express)
//require('koa-log')(app,express)
//=============================================================================
/*									Database								 */
//=============================================================================


	//here you will have to connect to your mongo database, 
	mongoose.connect('mongodb://localhost/Group_B')
	var db = mongoose.connection
	//set the port number and console log something so that 
	//you know that the mongodb is connected


//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port

// var staticPath = path.join(__dirname, '/public');
// app.use(express.static(staticPath)); 


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})




module.exports= app


