const { env } = require('../internal/env.js');
const callable = require('./callable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function element(value) {
	if (value === undefined || value === null) return false;
	if (env.window === undefined || env.window === null) return false;
	return callable(env.window.HTMLElement) &&
	value instanceof env.window.HTMLElement &&
	value.nodeType === 1;
}
