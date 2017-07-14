var objectToString = Object.prototype.toString;
var reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
var reTrim = /\s+/g;

var to = {};

to.string = function toString(value, force) {
	if (value && value.constructor && force) {
		if (!value.constructor.name || value.constructor.name === 'Object') {
			return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
		}
		return value.constructor.name;
	}
	return objectToString.call(value).slice(8, -1);
};

to.int = function toInt(value) {
	return value;
};

to.uint = function toUint(value) {
	return value;
};

to.bool = function toBoolean(value) {
	return value;
};

module.exports = to;
