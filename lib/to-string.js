const objectToString = Object.prototype.toString;
const reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
const reTrim = /\s+/g;

module.exports = function toString(value, force) {
	if (value && value.constructor && force) {
		if (!value.constructor.name || value.constructor.name === 'Object') {
			return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
		}
		return value.constructor.name;
	}
	return objectToString.call(value).slice(8, -1);
};
