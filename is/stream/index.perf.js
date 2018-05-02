import stream from './stream.js';
import streamWritable from './stream.writable.js';
import streamReadable from './stream.readable.js';
import streamDuplex from './stream.duplex.js';
import streamTransform from './stream.transform.js';

stream.writable = streamWritable;
stream.readable = streamReadable;
stream.duplex = streamDuplex;
stream.transform = streamTransform;
export default stream;
