const streamWritable = require('./stream.writable.js');
const streamReadable = require('./stream.readable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isStreamDuplex(value) {
	return streamWritable(value) && streamReadable(value);
};
