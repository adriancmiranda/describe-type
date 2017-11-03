import { objectToString } from '../../@/built-in.js';
import unsafeMethod from '../../has/unsafeMethod.js';
import array from '../shortcuts/array.js';
import object from '../shortcuts/object.js';
import arraylike from './arraylike.js';

export default function args(value) {
	return (!array(value) && arraylike(value) &&
		object(value) && unsafeMethod(value, 'callee')
	) || objectToString.call(value) === '[object Arguments]';
}
