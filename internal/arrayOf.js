const array = require('../is/array/array');
const unfilled = require('../is/unfilled');

module.exports = function arrayOf(value) {
	return array(value) ? value :
	unfilled(value) ? []: [value];
};
