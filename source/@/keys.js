import ownProperty from '../has/ownProperty.js';

/**
 *
 * @function
 * @memberof utility
 * @param {Object} context
 * @param {Boolean} getNum
 * @returns {Array}
 */
export default function keys(object, getEnum) {
	const properties = [];
	for (const key in object) {
		if (getEnum || ownProperty(object, key)) {
			properties.push(key);
		}
	}
	return properties;
}
