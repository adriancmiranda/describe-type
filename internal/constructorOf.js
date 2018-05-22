const { CONSTRUCTOR } = require('../internal/constants.js');
const { ObjectProto } = require('../internal/prototypes.js');
const { objectGetPrototypeOf, objectHasOwnProperty } = require('../internal/built-in.js');

/**
 *
 * @function
 * @memberof built-in
 * @param {any} value
 * @returns {String}
 */
module.exports = function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	const proto = value.__proto__;

	if (proto === null) return Object;

	return proto.constructor || getConstructorOf(value) || (() => {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return Object;
		}
		return value.constructor.prototype.constructor;
	})();
	function getConstructorOf(value) {
		const proto = objectGetPrototypeOf(value);
		if (proto === null) return Object;
		return proto.constructor;
	}
}
