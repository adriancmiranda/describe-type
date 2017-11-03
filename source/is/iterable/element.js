import callable from '../shortcuts/callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function element(value) {
	return value != null && (
		callable(HTMLElement) &&
		value instanceof HTMLElement &&
		value.nodeType === 1
	);
}
