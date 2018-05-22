// environment
exports.inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
exports.inNode = new Function('try{return this===global;}catch(err){return false;}')();
exports.env = inNode ? global : window;
