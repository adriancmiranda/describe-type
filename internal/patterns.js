// pattern(s)
exports.reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
exports.reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
exports.reRegExpFlags = /^(?:([gimuy])(?!.*\1)){0,5}$/;
exports.reRegExp = /^\/([\s\S]*)\/((?:([gimuy])(?!.*\3)){0,5})$/;
exports.reFunctionName = /\s*function\s+([^(\s]*)\s*/;
exports.reIsNativeFn = /\[native\scode\]/;
exports.reStringToBoolean = /^true|[1-9]+$/gi;
exports.reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
exports.reIsHex = /^([A-Fa-f0-9]+|)$/;
exports.reIsJsonStart = /^\[|^\{(?!\{)/;
exports.reEndsWithBracket = /\]$/;
exports.reEndsWithBrace = /\}$/;
exports.reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };
