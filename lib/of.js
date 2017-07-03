var isArrayLike = require('./is.array-like');
var toString = require('./to-string');

module.exports = function typeOf(value) {
	var name = toString(value, true);
	if (value === Infinity || value === undefined || value === null || (name === 'Number' && isNaN(value))) {
		return String(value);
	}
	return name === 'Object' && isArrayLike(value) ? 'Arguments' : name;
};
