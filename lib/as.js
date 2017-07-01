var is = require('./is');
var typify = require('./typify');
var constructorOf = require('./constructor-of');
var toArgs = Array.prototype.slice;

module.exports = function as(expected, value) {
	var type = typify(expected, true);
	var fn = new RegExp('\\bFunction\\b');
	if (constructorOf(value) === Function && !fn.test(type)) {
		value = value.apply(null, toArgs.call(arguments, 2));
	}
	return is(type, value) ? value : undefined;
};
