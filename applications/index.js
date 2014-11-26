
fs = require('fs');

string = require('string');

applications = {};

fs.readdirSync("./").filter(function(file) {
	return string(file).endsWith('.js') && file !== 'index.js';
}).forEach(function(file) {

	var name;

	name = string(file).chompRight('.js').capitalize().s;
	return applications[name] = function() {
	  	return new (require("./" + file))(Array.prototype.slice.call(arguments, 0));
	};
});

//modules.exports = applications;

console.log(applications.Gotoif('qwqw').getAsString());