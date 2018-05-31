/*!
 * 
 * ~~~~ describe-type v1.0.0-dev.3
 * 
 * @commit 92cf4b26b614012b6ea61bdc77c001afc15b6626
 * @moment Thursday, May 31, 2018 9:48 AM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
define(['exports'], function (exports) { 'use strict';

	var CONSTRUCTOR = 'constructor';

	// prototypes
	var ObjectProto = Object.prototype;
	var StringProto = String.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;
	var objectSupportsProto = StringProto === ''.__proto__;

	/**
	 *
	 * @name Object.getPrototypeOf
	 * @function
	 * @global
	 * @param {value}
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
	 */
	var Object_getPrototypeOf_next = objectSupportsProto ? function getPrototypeOf(value) {
		return value.__proto__ || ObjectProto;
	} : function getPrototypeOf(value) {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return value.constructor.prototype;
	};

	exports.getPrototypeOf = Object_getPrototypeOf_next;

});
