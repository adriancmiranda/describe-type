var typeOf = require('./of');
var typify = require('./typify');
var isBuffer = require('./is.buffer');
var isArraylike = require('./is.arraylike');
var isJson = require('./is.json');

function is(expected, value) {
	return new RegExp('(' + typify(expected, true) + ')').test(typeOf(value));
}

is.not = function isnt(expected, value) {
	return !is(expected, value);
};

is.not.buffer = function isntBuffer(value) {
	return !isBuffer(value);
};

is.not.arraylike = function isntArraylike(value) {
	return !isArraylike(value);
};

is.numeric = function isNumeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
};

is.not.numeric = function isntNumeric(value) {
	return !is.numeric(value);
};

is.int = function isInt(value) {
	return parseFloat(value, 10) === parseInt(value, 10);
};

is.not.int = function isntInt(value) {
	return !is.int(value);
};

is.uint = function isUint(value) {
	return is.int(value) && value >= 0;
};

is.not.uint = function isntUint(value) {
	return !is.uint(value);
};

is.primitive = function isPrimitive(value) {
	return typeof value === 'function' || value !== Object(value);
};

is.not.primitive = function isntPrimitive(value) {
	return !is.primitive(value);
};

is.not.json = function isntJson(value) {
	return !isJson(value);
};

is.buffer = isBuffer;
is.arraylike = isArraylike;
is.json = isJson;
is.a = is.an = is;
is.not.a = is.not.an = is.not;
module.exports = is;
