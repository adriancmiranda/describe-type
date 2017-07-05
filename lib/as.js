var is = require('./is');
var typify = require('./typify');
var constructorOf = require('./constructor-of');
var toArgs = Array.prototype.slice;
var reFn = /\bFunction\b/;

module.exports = function as(expected, value) {
	var type = typify(expected, true);
	var args = toArgs.call(arguments, 2);
	var scope = args[0] || null;
	if (constructorOf(value) === Function && !reFn.test(type)) {
		value = value.apply(scope, args);
	}
	return is(type, value) ? value : undefined;
};
