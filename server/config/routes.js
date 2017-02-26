//you need to require some files here
var app = require('express')
var GropAController = require('../book/groupAController.js')
var GropBController = require('../movie/groupBController.js') 
module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	//here you have to add two more routes
	app.post('/api/GropA/insterUser', GropAController.insertUser);
	app.get('/api/GropA/getAll', GropAController.showUsers);
	app.get('/api/GropA/getBynam/:name', GropAController.showUser);
	

	
	
//=============================================================================
/*								book route									 */
//=============================================================================
	//here you have to add two more routes
	app.post('/api/GropB/insterUsers', GropBController.insertUsers);
	app.get('/api/GropB/getAll', GropBController.showUsers);
	app.get('/api/GropB/getBynam/:name', GropBController.showUser);

};

