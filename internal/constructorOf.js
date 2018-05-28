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
	let proto = value.__proto__;
	if (proto === null) return Object;
	return proto.constructor || (() => {
		proto = getPrototypeOf(proto) || Object;
		return proto.constructor;
	})();
}
