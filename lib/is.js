/* eslint-disable no-multi-assign */
const typeOf = require('./of');
const typify = require('./typify');
const isBuffer = require('./is.buffer');

function is(expected, value, ignoreCase) {
	return new RegExp(`(${
		typify(expected, true)
	})`, ignoreCase ? 'i' : undefined).test(typeOf(value));
}

is.not = function isnt(expected, value, ignoreCase) {
	return !is(expected, value, ignoreCase);
};

is.not.buffer = function isntBuffer(value) {
	return !isBuffer(value);
};

is.buffer = isBuffer;
is.a = is.an = is;
is.not.a = is.not.an = is.not;
module.exports = is;
