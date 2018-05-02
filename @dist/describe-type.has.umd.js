/*!
 * 
 * ~~~~ describe-type v1.0.0
 * 
 * @commit 1204e947bcd466d7e08675c921d51f6d783b1923
 * @moment Wednesday, May 2, 2018 1:13 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2021
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.describetype = global.describetype || {}, global.describetype.has = {})));
}(this, (function (exports) { 'use strict';

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

	var unsafeMethod_next = /*#__PURE__*/{
		default: unsafeMethod
	};

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
		if (context === undefined || context === null) { return false; }
		return objectHasOwnProperty.call(context, key);
	}

	var ownProperty_next = /*#__PURE__*/{
		default: ownProperty
	};

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

	var ownValue_next = /*#__PURE__*/{
		default: ownValue
	};

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

	var own_next = /*#__PURE__*/{
		default: own
	};

	/**
	 *
	 * @function
	 * @memberof has
	 * @param {Object|Function} context
	 * @param {any} key
	 * @returns {Boolean}
	 */
	function at(context, key) {
		if (context === undefined || context === null) { return false; }
		return context[key] === undefined === false;
	}

	var at_next = /*#__PURE__*/{
		default: at
	};

	var _unsafeMethodNextJs = ( unsafeMethod_next && unsafeMethod ) || unsafeMethod_next;

	var _ownPropertyNextJs = ( ownProperty_next && ownProperty ) || ownProperty_next;

	var _ownValueNextJs = ( ownValue_next && ownValue ) || ownValue_next;

	var _ownNextJs = ( own_next && own ) || own_next;

	var _atNextJs = ( at_next && at ) || at_next;

	var unsafeMethod$1 = _unsafeMethodNextJs;
	var ownProperty$1 = _ownPropertyNextJs;
	var ownValue$1 = _ownValueNextJs;
	var own$1 = _ownNextJs;
	var at$1 = _atNextJs;

	var has = {
		unsafeMethod: unsafeMethod$1,
		ownProperty: ownProperty$1,
		ownValue: ownValue$1,
		own: own$1,
		at: at$1
	};

	exports.default = has;
	exports.unsafeMethod = unsafeMethod$1;
	exports.ownProperty = ownProperty$1;
	exports.ownValue = ownValue$1;
	exports.own = own$1;
	exports.at = at$1;

})));
