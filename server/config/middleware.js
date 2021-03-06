var app = require('express')
var bodyparser = require('body-parser')
var morgan = require('morgan')
//require some files here

module.exports = function (app, express) {
  //use middleware to provide concise output colored by response status for development use
  	app.use(morgan('dev'))
  //use middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body.
	app.use(bodyparser.urlencoded({ extended: false }))
  //use middleware that only parses json
  	app.use(bodyparser.json())
  //use the built in middleware to serve static files such as images, CSS files, and JavaScript files.
	 app.use(express.static('public'))
  	//app.use(express.static());

};
