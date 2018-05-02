'use strict';

var streamWritable = require('./stream.writable.js');

var streamReadable = require('./stream.readable.js');

/**
 *
 * @function
 * @memberof is
 * @param {any} value
 * @returns {Boolean}
 */
module.exports = isStreamDuplex;
function isStreamDuplex(value) {
  return streamWritable(value) && streamReadable(value);
}
