import arraylike from './arraylike.js';
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
	if (value == null) return false;
	if (bool(value)) return true;
	try {
		const test = parseFloat(value);
		return (nan(test) || infinity(value) || arraylike(value)) === false;
	} catch (err) {
		return false;
	}
}
