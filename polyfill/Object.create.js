'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var notType = require('../is/not/not.type.js');

var each = require('../internal/each.js');

/**
 *
 * @function
 * @param {Object} proto - The object which should be the prototype of the newly-created object.
 * @param {Object} properties - Optional. If specified and not undefined, an object whose
 * enumerable own properties (that is, those properties defined upon itself and not enumerable
 * properties along its prototype chain) specify property descriptors to be added to the
 * newly-created object, with the corresponding property names. These properties correspond to
 * the second argument of `Object.defineProperties()`.
 * @returns {Object}
 */
module.exports = Object.create || function create(proto, properties) {
	if (proto === null) return {};
	if (notType(Object, proto)) {
		throw new TypeError('Object prototype may only be an Object or null: ' + (typeof proto === 'undefined' ? 'undefined' : _typeof(proto)));
	}
	var Instance = function Instance() {};
	Instance.prototype = proto;
	proto = new Instance();
	each(properties, function (value, property) {
		proto[property] = value.value;
	});
	return proto;
};
