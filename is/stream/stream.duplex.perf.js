import streamWritable from './stream.writable';
import streamReadable from './stream.readable';

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
