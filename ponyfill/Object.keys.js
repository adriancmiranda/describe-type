/* eslint-disable no-restricted-syntax */
const ownProperty = require('../has/ownProperty.js');

/**
 *
 * @function
 * @memberof utility
 * @param {Object} keys -
 * @param {Boolean} getInheritedProps -
 * @returns {Array}
 */
module.exports = function keys(object, getInheritedProps) {
	if (object === undefined || object === null) return [];
	if (Object.keys && !getInheritedProps) {
		return Object.keys(object);
	}
	const properties = [];
	for (const key in object) {
		if (getInheritedProps || ownProperty(object, key)) {
			properties[properties.length] = key;
		}
	}
	return properties;
}
