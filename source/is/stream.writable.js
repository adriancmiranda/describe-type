/* eslint-disable no-underscore-dangle */
import stream from './stream.js';
import callable from './callable.js';

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
