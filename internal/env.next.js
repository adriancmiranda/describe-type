import { StringProto } from './prototypes.next.js';

// environment
export const objectSupportsProto = StringProto === ''.__proto__;
export const inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
export const inNode = new Function('try{return this===global;}catch(err){return false;}')();
export const env = exports.inNode ? global : window;
