// environment
export const isBrowser = new Function('try{return this===window;}catch(err){return false;}');
export const isNode = new Function('try{return this===global;}catch(err){return false;}');
export const inBrowser = isBrowser();
export const inNode = isNode();
export const env = inNode ? global : window;
