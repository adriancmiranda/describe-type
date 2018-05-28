const { CONSTRUCTOR } = require('./constants.js');
const { objectHasOwnProperty } = require('./built-in.js');
const getPrototypeOf = require('../polyfill/Object.getPrototypeOf.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	const proto = getPrototypeOf(value) || Object;
	return proto.constructor;
}
