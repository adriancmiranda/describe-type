import stream from './stream';
import streamWritable from './stream.writable';
import streamReadable from './stream.readable';
import streamDuplex from './stream.duplex';
import streamTransform from './stream.transform';

stream.writable = streamWritable;
stream.readable = streamReadable;
stream.duplex = streamDuplex;
stream.transform = streamTransform;
export default stream;
