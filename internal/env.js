const { StringProto } = require('./prototypes.js');

// environment
exports.objectSupportsProto = StringProto === ''.__proto__;
exports.inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
exports.inNode = new Function('try{return this===global;}catch(err){return false;}')();
exports.env = exports.inNode ? global : window;
