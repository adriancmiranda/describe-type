'use strict';

var intOf = require('../internal/intOf.js');

/**
 *
 * @function
 * @memberof utility
 * @param {Number} n - index
 * @param {Number} a - divident
 * @param {Number} b - divisor
 * @returns {Number}
 */
module.exports = mod;
function mod(n, a, b) {
	n = intOf(n);
	a = intOf(a);
	b = intOf(b);
	var rem = void 0;
	if (a < 0 || b < 0) {
		var places = b - a;
		rem = (n - a) % (places + 1);
		rem = rem < 0 ? rem + (places + 1) : rem === 0 ? 0 : rem;
		return rem - (places - b);
	}
	if (n === b) return n;
	if (n === b + 1) return a;
	if (n === a - 1) return b;
	rem = n % (b || 1);
	rem = rem < a ? rem + b : rem === 0 ? 0 : rem;
	return rem;
} /* eslint-disable no-nested-ternary */
