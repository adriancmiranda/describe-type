var is = require('./is');
var typify = require('./typify');
var constructorOf = require('./constructor-of');

module.exports = function as(expected, value, ignoreCase) {
	var type = typify(expected, true);
	var fn = new RegExp('\\bFunction\\b', ignoreCase ? 'i' : undefined);
	if (constructorOf(value) === Function && !fn.test(type)) {
		value = value.apply(null, Array.prototype.slice.call(arguments, 3));
	}
	return is(type, value, ignoreCase) ? value : undefined;
};
