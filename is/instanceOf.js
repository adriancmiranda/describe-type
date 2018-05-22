const callable = require('./callable.js');
const type = require('./type.js');

/**
 * TODO: a,an,any
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function instanceOf(expected, value) {
	if (expected === undefined || expected === null) return expected === value;
	if (expected instanceof Array && expected.length > 0) {
		for (let i = expected.length - 1; i > -1; i -= 1) {
			const ctor = expected[i];
			if (ctor === Number) return type(ctor, value); // ... should normalize?!
			if (callable(ctor) && value instanceof ctor) return true;
		}
	}
	if (expected === Number) return type(expected, value); // ... should normalize?!
	return callable(expected) && value instanceof expected;
}
