var isArrayLike = require('./is.array-like');
var { string } = require('./to');

module.exports = function typeOf(value) {
	var name = string(value, true);
	if (value === Infinity || value === undefined || value === null || (name === 'Number' && isNaN(value))) {
		return String(value);
	}
	return name === 'Object' && isArrayLike(value) ? 'Arguments' : name;
};
