const is = require('./is');
const typify = require('./typify');
const constructorOf = require('./constructor-of');
const toArgs = Array.prototype.slice;
const reFn = /\bFunction\b/;

module.exports = function as(expected, value) {
	const type = typify(expected, true);
	const args = toArgs.call(arguments, 2);
	const scope = args[0] || null;
	if (constructorOf(value) === Function && !reFn.test(type)) {
		value = value.apply(scope, args);
	}
	return is(type, value) ? value : undefined;
};
