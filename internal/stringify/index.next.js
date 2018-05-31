import stringify from './stringify.next.js';
import stringifyArray from './stringify.array.next.js';
import stringifyObject from './stringify.object.next.js';

stringify.array = stringifyArray;
stringify.object = stringifyObject;
export default stringify;
