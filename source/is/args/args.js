import { objectToString } from '../../@/built-in.js';
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
	return (!array(value) && arraylike(value) &&
		object(value) && unsafeMethod(value, 'callee')
	) || objectToString.call(value) === '[object Arguments]';
}
