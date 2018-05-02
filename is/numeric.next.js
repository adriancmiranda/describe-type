import arraylike from './arraylike/arraylike.next.js';
import bool from './bool.next.js';
import nan from './nan.next.js';
import infinity from './infinity.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function numeric(value) {
	if (value === undefined || value === null) return false;
	if (bool(value)) return true;
	try {
		const test = parseFloat(value);
		return (nan(test) || infinity(test) || arraylike(test)) === false;
	} catch (err) {
		return false;
	}
}
