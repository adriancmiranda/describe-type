import streamWritable from './stream.writable.js';
import streamReadable from './stream.readable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isStreamDuplex(value) {
	return streamWritable(value) && streamReadable(value);
}
