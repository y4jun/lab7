var projects = require('../projects.json');

/*
 * GET home page.
 */

 exports.viewAlt = function(req, res){
 	projects["viewAlt"] = true;
 	res.render('index', projects);
 };

exports.view = function(request, response){
	projects["viewAlt"] = false;
  	response.render('index', projects);
};