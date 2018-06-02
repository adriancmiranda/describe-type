import { ObjectProto, SymbolProto } from './prototypes.next.js';

// built-in method(s)
export const objectHasOwnProperty = ObjectProto.hasOwnProperty;
export const objectToString = ObjectProto.toString;
export const symbolToString = SymbolProto ? SymbolProto.toString : undefined;
