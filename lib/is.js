/* eslint-disable no-multi-assign */
var typeOf = require('./of');
var typify = require('./typify');
var isBuffer = require('./is.buffer');
var isArrayLike = require('./is.array-like');

function is(expected, value) {
	return new RegExp('(' + typify(expected, true) + ')').test(typeOf(value));
}

is.not = function isnt(expected, value) {
	return !is(expected, value);
};

is.not.buffer = function isntBuffer(value) {
	return !isBuffer(value);
};

is.not.arrayLike = function isntArrayLike(value) {
	return !isArrayLike(value);
};

is.buffer = isBuffer;
is.arrayLike = isArrayLike;
is.a = is.an = is;
is.not.a = is.not.an = is.not;
module.exports = is;
