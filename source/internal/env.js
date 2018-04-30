// environment
export const isBrowser = new Function('try{return this===window;}catch(err){return false;}');
export const isNode = new Function('try{return this===global;}catch(err){return false;}');

export const inBrowser = isBrowser();
export const inNode = isNode();

export const env = inNode ? global : window;

export const NUMBER = 'number';
export const BOOLEAN = 'boolean';
export const STRING = 'string';
export const SYMBOL = 'symbol';
export const OBJECT = 'object';
export const FUNCTION = 'function';
export const NULL = 'null';
export const UNDEFINED = 'undefined';
export const GENERATOR_FUNCTION = 'GeneratorFunction';
export const ASYNC_FUNCTION = 'AsyncFunction';
export const ARGUMENTS = 'Arguments';
export const INFINITY = 'Infinity';
export const NAN = 'NaN';
export const CONSTRUCTOR = 'constructor';
export const PREFIX_SEAL = '[object ';
export const ARGUMENTS_SEAL = '[object Arguments]';
export const CALLEE = 'callee';
