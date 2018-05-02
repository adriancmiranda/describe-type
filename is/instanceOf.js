'use strict';

var callable = require('./callable.js');

var type = require('./type.js');

/**
 * TODO: a,an,any
 * @function
 * @memberof is
 * @param {Function|Array.<Function>} expected
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = instanceOf;
function instanceOf(expected, value) {
	if (expected === undefined || expected === null) return expected === value;
	if (expected instanceof Array && expected.length > 0) {
		for (var i = expected.length - 1; i > -1; i -= 1) {
			var ctor = expected[i];
			if (ctor === Number) return type(ctor, value); // ... should normalize?!
			if (callable(ctor) && value instanceof ctor) return true;
		}
	}
	if (expected === Number) return type(expected, value); // ... should normalize?!
	return callable(expected) && value instanceof expected;
}
