import fn from './fn.next.js';
import fnNative from './fn.native.next.js';
import fnCallable from './fn.callable.next.js';
import fnCaste from './fn.caste.next.js';

fn.fn = fn;
fn.native = fnNative;
fn.callable = fnCallable;
fn.caste = fnCaste;
export default fn;
