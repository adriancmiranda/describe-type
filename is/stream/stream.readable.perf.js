/* eslint-disable no-underscore-dangle */
import callable from '../callable.js';
import stream from './stream.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isStreamReadable(value) {
	return stream(value) &&
	value.readable !== false &&
	value._readableState != null &&
	callable(value._read);
}
