/* eslint-disable no-restricted-syntax */
import callable from '../is/callable.js';
import ownProperty from '../has/ownProperty.js';
import resolveProperty from './resolveProperty.js';

/**
 *
 * @function
 * @param {any} value
 * @param {Function} cmd
 * @param {any} context
 * @param {Boolean} getEnum
 * @returns {?}
 */
export default function eachProperty(value, cmd, context, getEnum) {
	let i = 0;
	const readStatics = callable(value) === false;
	for (const key in value) {
		if (getEnum || ownProperty(value, key)) {
			const response = resolveProperty(value, key, readStatics, cmd, context, i += 1);
			if (response !== undefined) {
				return response;
			}
		}
	}
	return undefined;
}
