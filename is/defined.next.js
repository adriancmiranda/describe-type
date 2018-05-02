import undef from './undef.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
export default function defined(value) {
	return undef(value) === false;
}
