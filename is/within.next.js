import floatOf from '../internal/floatOf.next.js';
import infinity from './infinity.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {Number} value
 * @param {Number} start
 * @param {Number} finish
 * @returns {Boolean}
 */
export default function within(value, start, finish) {
	value = floatOf(value);
	start = floatOf(start);
	finish = floatOf(finish);
	return infinity(value) || infinity(start) || infinity(finish) ||
		(value >= start && value <= finish)
	;
}
