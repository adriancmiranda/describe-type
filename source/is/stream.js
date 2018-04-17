/* eslint-disable no-underscore-dangle */
import callable from './callable.js';

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
function stream(value) {
	if (value == null || value._events == null) return false;
	return callable(value.pipe);
}

stream.writable = function isStreamWritable(value) {
	return stream(value) &&
	value.writable !== false &&
	value._writableState != null &&
	callable(value._write);
};

stream.readable = function isStreamReadable(value) {
	return stream(value) &&
	value.readable !== false &&
	value._readableState != null &&
	callable(value._read);
};

stream.duplex = function isStreamDuplex(value) {
	return stream.writable(value) &&
	stream.readable(value);
};

stream.transform = function isStreamTransform(value) {
	return stream.duplex(value) &&
	value._transformState != null &&
	callable(value._transform);
};

export default stream;
