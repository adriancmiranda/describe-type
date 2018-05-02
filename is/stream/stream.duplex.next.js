import streamWritable from './stream.writable.next.js';
import streamReadable from './stream.readable.next.js';

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
