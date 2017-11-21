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
		rem = (n - a) % places;
		rem = rem < (a + 1) ? (rem + places) : rem === 0 ? 0 : rem - 1;
		return rem - (places - b);
	}
	rem = n % (b || 1);
	return rem < a ? (rem + b) : rem === 0 ? 0 : rem;
}
