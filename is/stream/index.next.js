import stream from './stream.next.js';
import streamWritable from './stream.writable.next.js';
import streamReadable from './stream.readable.next.js';
import streamDuplex from './stream.duplex.next.js';
import streamTransform from './stream.transform.next.js';

stream.writable = streamWritable;
stream.readable = streamReadable;
stream.duplex = streamDuplex;
stream.transform = streamTransform;
export default stream;
