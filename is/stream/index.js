'use strict';

var stream = require('./stream.js');

var streamWritable = require('./stream.writable.js');

var streamReadable = require('./stream.readable.js');

var streamDuplex = require('./stream.duplex.js');

var streamTransform = require('./stream.transform.js');

stream.writable = streamWritable;
stream.readable = streamReadable;
stream.duplex = streamDuplex;
stream.transform = streamTransform;
module.exports = stream;
