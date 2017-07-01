/* eslint-disable vars-on-top */
var isArrayLike = require('./is.array-like');
var toString = require('./to-string');

module.exports = function typeOf(value) {
	var name = toString(value, true);
	if (value !== Infinity && value !== undefined && value !== null) {
		var type = name === 'Number' && !isFinite(value) ? value.toString() : name;
		var definition = (type === 'Object' && isArrayLike(value) ? 'Arguments' : type);
		var args = definition === 'Arguments' && definition;
		return String(args || type || name || definition);
	}
	return String(value);
};
