/*!
 * 
 * ~~~~ describe-type v0.6.4
 * 
 * @commit a262085a45bd1b93e4925e5732a342e055ab7294
 * @moment Sunday, December 10, 2017 3:56 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-2020 Adrian C. Miranda
 */
'use strict';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function callable(value) {
	return typeof value === 'function';
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
	if (context == null) { return false; }
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
	if (value == null) { return false; }
	return value.constructor === Array;
}

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function string(value) {
	return typeof value === 'string' || value instanceof String;
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
		(!!value && typeof value === 'object' && typeof value.length === 'number') &&
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

exports.unsafeMethod = unsafeMethod;
exports.ownProperty = ownProperty;
exports.ownValue = ownValue;
exports.own = own;
