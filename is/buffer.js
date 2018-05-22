const { env } = require('../internal/env.js');
const callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function buffer(value) {
	if (value === undefined || value === null) return false;
	if (callable(env.Buffer) === false) return false;
	const isBuffer = value instanceof env.Buffer && callable(value.constructor.isBuffer);
	return isBuffer && value.constructor.isBuffer(value);
}
