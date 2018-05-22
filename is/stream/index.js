const stream = require('./stream.js');
const streamWritable = require('./stream.writable.js');
const streamReadable = require('./stream.readable.js');
const streamDuplex = require('./stream.duplex.js');
const streamTransform = require('./stream.transform.js');

stream.writable = streamWritable;
stream.readable = streamReadable;
stream.duplex = streamDuplex;
stream.transform = streamTransform;
module.exports = stream;
