/* eslint-disable no-underscore-dangle */
import callable from '../callable.next.js';
import stream from './stream.next.js';

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
