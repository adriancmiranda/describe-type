/* eslint-disable no-underscore-dangle */
const callable = require('../callable.js');
const streamDuplex = require('./stream.duplex.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = function isStreamTransform(value) {
	return streamDuplex(value) &&
	value._transformState != null &&
	callable(value._transform);
}
