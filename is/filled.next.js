import unfilled from './unfilled.next.js';

/**
 *
 * @function
 * @memberof is
 * @param {any}
 * @returns {Boolean}
 */
export default function filled(value) {
	return unfilled(value) === false;
}
