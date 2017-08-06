const typeOf = require('../of');
const typify = require('../typify');

module.exports = function is(expected, value) {
	return new RegExp(`(${typify(expected, true)})`).test(typeOf(value));
};
