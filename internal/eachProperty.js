'use strict';

var callable = require('../is/callable.js');

var ownProperty = require('../has/ownProperty.js');

var resolveProperty = require('./resolveProperty.js');

/**
 *
 * @function
 * @param {any} value
 * @param {Function} cmd
 * @param {any} context
 * @param {Boolean} getInheritedProps
 * @returns {?}
 */
module.exports = eachProperty;
function eachProperty(value, cmd, context, getInheritedProps) {
	var i = 0;
	var readStatics = callable(value) === false;
	for (var key in value) {
		if (getInheritedProps || ownProperty(value, key)) {
			var response = resolveProperty(value, key, readStatics, cmd, context, i += 1);
			if (response !== undefined) {
				return response;
			}
		}
	}
	return undefined;
} /* eslint-disable no-restricted-syntax */
