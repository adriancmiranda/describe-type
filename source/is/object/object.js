import type from '../type.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function object(value, safe) {
	return type(Object, value, safe);
}

object.safe = function objectSafe(value) {
	return object(value, true);
};

export default object;