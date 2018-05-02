import callable from '../is/callable.next.js';

/**
 *
 * @function
 * @memberof has
 * @param {object} context
 * @param {any} value
 * @returns {Boolean}
 */
export default function unsafeMethod(context, methodName) {
	try {
		return callable(context[methodName]);
	} catch (err) {
		return false;
	}
}
