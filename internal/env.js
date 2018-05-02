'use strict';

// environment
var inBrowser = exports.inBrowser = new Function('try{return this===window;}catch(err){return false;}')();
var inNode = exports.inNode = new Function('try{return this===global;}catch(err){return false;}')();
var env = exports.env = inNode ? global : window;
