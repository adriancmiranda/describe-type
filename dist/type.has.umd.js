/*!
 * 
 * ~~~~ describe-type v0.7.0
 * 
 * @commit 4dac7473de55d8eb664b76469431043943979fcb
 * @moment Sunday, April 29, 2018 7:35 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021 Adrian C. Miranda
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.type = global.type || {}, global.type.has = {})));
}(this, (function (exports) { 'use strict';

	// environment
	var isBrowser = new Function('try{return this===window;}catch(err){return false;}');
	var isNode = new Function('try{return this===global;}catch(err){return false;}');
	var inBrowser = isBrowser();
	var inNode = isNode();
	var NUMBER = 'number';
	var STRING = 'string';
	var OBJECT = 'object';
	var FUNCTION = 'function';

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function callable(value) {
		return typeof value === FUNCTION;
	}

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {object} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function unsafeMethod(context, methodName) {
		try {
			return callable(context[methodName]);
		} catch (err) {
			return false;
		}
	}

	// prototypes
	var ObjectProto = Object.prototype;

	// built-in method(s)
	var objectHasOwnProperty = ObjectProto.hasOwnProperty;

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	function ownProperty(context, key) {
		if (context === null || context === undefined) { return false; }
		return objectHasOwnProperty.call(context, key);
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function array(value) {
		return value instanceof Array;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function string(value) {
		return typeof value === STRING || value instanceof String;
	}

	/**
	 *
	 * @function
	 * @memberof is
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function arraylike(value) {
		return array(value) || string(value) || (
			(!!value && typeof value === OBJECT && typeof value.length === NUMBER) &&
			(value.length === 0 || (value.length > 0 && (value.length - 1) in value))
		);
	}

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {String|Array} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function ownValue(context, value) {
		if (arraylike(context) === false) { return false; }
		for (var id = context.length - 1; id > -1; id -= 1) {
			if (value === context[id]) {
				return true;
			}
		}
		return false;
	}

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Array|String|Object|Function} context
	 * @param {any} value
	 * @returns {Boolean}
	 */
	function own(context, value) {
		if (array(context)) { return ownValue(context, value); }
		return ownProperty(context, value);
	}

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	function at(context, key) {
		if (context === null || context === undefined) { return false; }
		return context[key] === undefined === false;
	}

	exports.unsafeMethod = unsafeMethod;
	exports.ownProperty = ownProperty;
	exports.ownValue = ownValue;
	exports.own = own;
	exports.at = at;

})));
