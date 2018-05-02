import { CALLEE, ARGUMENTS_SEAL } from '../../internal/constants.next.js';
import { objectToString } from '../../internal/built-in.next.js';
import unsafeMethod from '../../has/unsafeMethod.next.js';
import array from '../array/array.next.js';
import object from '../object/object.next.js';
import arraylike from '../arraylike/arraylike.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function args(value) {
	return (array(value) === false && arraylike(value) &&
		object(value) && unsafeMethod(value, CALLEE)
	) || objectToString.call(value) === ARGUMENTS_SEAL;
}
