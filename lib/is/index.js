const is = require('./is');

is.numeric = require('./numeric');
is.int = require('./int');
is.uint = require('./uint');
is.primitive = require('./primitive');
is.buffer = require('./buffer');
is.arraylike = require('./arraylike');
is.json = require('./json');
is.a = is.an = is;

is.not = function isnt(expected, value) {
	return !is(expected, value);
};

is.not.buffer = function isntBuffer(value) {
	return !is.buffer(value);
};

is.not.arraylike = function isntArraylike(value) {
	return !is.arraylike(value);
};

is.not.numeric = function isntNumeric(value) {
	return !is.numeric(value);
};

is.not.int = function isntInt(value) {
	return !is.int(value);
};

is.not.uint = function isntUint(value) {
	return !is.uint(value);
};

is.not.primitive = function isntPrimitive(value) {
	return !is.primitive(value);
};

is.not.json = function isntJson(value) {
	return !is.json(value);
};

is.not.a = is.not.an = is.not;
module.exports = is;
