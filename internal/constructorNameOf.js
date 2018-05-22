const typeOf = require('./typeOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = function constructorNameOf(value) {
	const name = typeOf(value);
	return (name === 'Function' && (value != null && value.name)) || name;
}
