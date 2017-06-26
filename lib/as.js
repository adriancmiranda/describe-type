const is = require('./is');
const typify = require('./typify');
const constructorOf = require('./constructor-of');

module.exports = function as(expected, value, ignoreCase, ...args) {
	const type = typify(expected, true);
	const fn = new RegExp('\\bFunction\\b', ignoreCase ? 'i' : undefined);
	if (constructorOf(value) === Function && !fn.test(type)) {
		value = value(...args);
	}
	return is(type, value, ignoreCase) ? value : undefined;
};
