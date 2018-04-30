import { objectToString } from '../../internal/built-in.js';
import { CALLEE, ARGUMENTS_SEAL } from '../../internal/env.js';
import unsafeMethod from '../../has/unsafeMethod.js';
import array from '../array/array.js';
import object from '../object/object.js';
import arraylike from '../arraylike/arraylike.js';

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
