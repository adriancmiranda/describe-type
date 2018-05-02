'use strict';

// pattern(s)
var reIsBase64 = exports.reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var reFunctionName = exports.reFunctionName = /\s*function\s+([^(\s]*)\s*/;
var reIsNativeFn = exports.reIsNativeFn = /\[native\scode\]/;
var reStringToBoolean = exports.reStringToBoolean = /^true|[1-9]+$/gi;
var reToPropName = exports.reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
var reIsHex = exports.reIsHex = /^([A-Fa-f0-9]+|)$/;
var reIsHexadecimal = exports.reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
var reIsJsonStart = exports.reIsJsonStart = /^\[|^\{(?!\{)/;
var reEndsWithBracket = exports.reEndsWithBracket = /\]$/;
var reEndsWithBrace = exports.reEndsWithBrace = /\}$/;
var reIsJsonEnds = exports.reIsJsonEnds = { '[': reEndsWithBracket, '{': reEndsWithBrace };
