import args from './args.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isEmptyArgs(value) {
	return args(value) && value.length === 0;
}
