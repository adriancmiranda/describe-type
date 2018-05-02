import { ObjectProto, StringProto } from './prototypes.next.js';

// built-in method(s)
export const objectHasOwnProperty = ObjectProto.hasOwnProperty;
export const objectToString = ObjectProto.toString;
export const objectGetPrototypeOf = Object.getPrototypeOf;
export const objectSupportsProto = StringProto === ''.__proto__;
