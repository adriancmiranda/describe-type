import typeOf from './typeOf.js';

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
export default function constructorNameOf(value) {
	const name = typeOf(value);
	return (name === 'Function' && (value != null && value.name)) || name;
}
