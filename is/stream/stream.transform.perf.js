/* eslint-disable no-underscore-dangle */
import callable from '../callable.js';
import streamDuplex from './stream.duplex.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
export default function isStreamTransform(value) {
	return streamDuplex(value) &&
	value._transformState != null &&
	callable(value._transform);
}
