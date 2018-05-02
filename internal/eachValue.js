"use strict";

/**
 *
 * @function
 * @param {Array|arraylike} value
 * @param {Function} cmd
 * @param {any} context
 * @returns {?}
 */
module.exports = eachValue;
function eachValue(value, cmd, context, keepReverse) {
	if (value === undefined || value === null) return undefined;
	var size = (0 | value.length) - 1;
	for (var index = size; index > -1; index -= 1) {
		var i = keepReverse ? index : size - index;
		var item = value[i];
		var resolve = cmd.call(context || item, item, i, value, i);
		if (resolve === undefined === false) {
			return resolve;
		}
	}
	return undefined;
}
