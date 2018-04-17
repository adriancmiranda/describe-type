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

stream.writable = (value) =>
	stream(value) &&
	value.writable !== false &&
	stream._writableState != null && 
	callable(stream._write)
;

stream.readable = (value) => 
	stream(value) &&
	value.readable !== false &&
	value._readableState != null &&
	callable(value._read)
;

stream.duplex = (value) => 
	stream.writable(value) &&
	stream.readable(value)
;

stream.transform = (value) =>
	stream.duplex(stream) &&
	stream._transformState != null &&
	callable(stream._transform)
;

export default stream;
