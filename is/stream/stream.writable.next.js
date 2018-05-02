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
export default function isStreamWritable(value) {
	return stream(value) &&
	value.writable !== false &&
	value._writableState != null &&
	callable(value._write);
}
