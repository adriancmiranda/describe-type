import arraylike from './arraylike/arraylike.js';
import bool from './bool.js';
import nan from './nan.js';
import infinity from './infinity.js';

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
