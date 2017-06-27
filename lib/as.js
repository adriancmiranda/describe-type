var is = require('./is');
var typify = require('./typify');
var constructorOf = require('./constructor-of');

module.exports = function as(expected, value, ignoreCase, ...args) {
	var type = typify(expected, true);
	var fn = new RegExp('\\bFunction\\b', ignoreCase ? 'i' : undefined);
	if (constructorOf(value) === Function && !fn.test(type)) {
		value = value(...args);
	}
	return is(type, value, ignoreCase) ? value : undefined;
};
