/* eslint-disable no-restricted-syntax */
import ownProperty from '../has/ownProperty.js';

/**
 *
 * @function
 * @memberof utility
 * @param {Object} context
 * @param {Boolean} getNum
 * @returns {Array}
 */
export default function keys(object, getInheritedProps) {
	if (object == null) return [];
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
