const is = require('./is');
const stringToBoolean = /^true|[1-9]+$/gi;
const to = {};

to.string = function stringify(value, space, replacer) {
	if (is([RegExp, Function], value)) {
		return value.toString();
	}
	return JSON.stringify(value, replacer, space);
};

to.int = function toInt(value) {
	return 0 | parseInt(value, 10);
};

to.uint = function toUint(value) {
	value = to.int(value);
	return value < 0 ? 0 : value;
};

to.float = function toFloat(value) {
	value = parseFloat(value, 10);
	return is.numeric(value) ? value : 0;
};

to.bool = function toBoolean(value) {
	if (is(String, value)) {
		return stringToBoolean.test(value);
	}
	return !!value;
};

module.exports = to;
