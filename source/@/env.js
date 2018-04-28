// environment
export const isBrowser = new Function('try{return this===window;}catch(err){return false;}');
export const isNode = new Function('try{return this===global;}catch(err){return false;}');
export const inBrowser = isBrowser();
export const inNode = isNode();
export const env = inNode ? global : window;
export const NUMBER = 'number';
export const BOOLEAN = 'boolean';
export const FUNCTION = 'function';
export const STRING = 'string';
export const SYMBOL = 'symbol';
