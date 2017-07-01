var is = require('./is');
var typify = require('./typify');
var constructorOf = require('./constructor-of');
var toArgs = Array.prototype.slice;
var reFn = /\bFunction\b/;

module.exports = function as(expected, value) {
	var type = typify(expected, true);
	if (constructorOf(value) === Function && !reFn.test(type)) {
		value = value.apply(null, toArgs.call(arguments, 2));
	}
	return is(type, value) ? value : undefined;
};
