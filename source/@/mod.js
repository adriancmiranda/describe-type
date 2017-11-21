/* eslint-disable no-nested-ternary */
import intOf from '../built-in/intOf.js';

/**
 *
 * @function
 * @memberof utility
 * @param {Number} n - index
 * @param {Number} a - divident
 * @param {Number} b - divisor
 * @returns {Number}
 */
export default function mod(n, a, b) {
	n = intOf(n);
	a = intOf(a);
	b = intOf(b);
	let rem;
	if (a < 0 || b < 0) {
		const places = (b - a);
		rem = (n - a) % (places + 1);
		rem = rem < 0 ? (rem + (places + 1)) : rem === 0 ? 0 : rem;
		return rem - (places - b);
	}
	rem = n % (b || 1);
	return rem < a ? (rem + b) : rem;
}
