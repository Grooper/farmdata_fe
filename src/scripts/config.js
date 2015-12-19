/*
 Project Configuration Settings and Variables
*/

// What URLs are we hitting
var urls = function() {
	this.HOST_URL = 'http://localhost:9000';
	this.API_URL = this.HOST_URL + '/api/';
};

// Any API tokens from external services should go here
var tokens = function() {

};

// Export configuration settings
exports.urls = urls();
exports.tokens = tokens();

module.exports = exports;
