var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var friend = {
		"name": request.query.name,
		"description": request.query.description,
		"image_URL": "http://lorempixel.com/400/400/people"
	};
	data.friends.push(friend);
	console.log();
	response.render("index", data);
}