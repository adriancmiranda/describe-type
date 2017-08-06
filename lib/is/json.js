const constructorOf = require('../constructor-of');

const jsonStart = /^\[|^\{(?!\{)/;
const jsonEnds = {
	'[': /\]$/,
	'{': /\}$/,
};

module.exports = function isJson(value) {
	if (constructorOf(value) === String) {
		const start = value.match(jsonStart);
		return !!(start && jsonEnds[start[0]].test(value));
	}
	return false;
};
