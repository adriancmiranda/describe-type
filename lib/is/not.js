const is = require('./is');

module.exports = function isnt(expected, value) {
	return !is(expected, value);
};
