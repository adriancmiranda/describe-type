import undef from './undef';

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
