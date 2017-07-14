var constructorOf = require('./constructor-of');

var jsonStart = /^\[|^\{(?!\{)/;
var jsonEnds = {
	'[': /\]$/,
	'{': /\}$/,
};

module.exports = function isJson(value) {
	if (constructorOf(value) === String) {
		var start = value.match(jsonStart);
		return !!(start && jsonEnds[start[0]].test(value));
	}
	return false;
};
