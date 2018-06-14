// pattern(s)
exports.reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
exports.reIsRGB = /(rgb[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])?[)])/i;
exports.reIsRGBA = /(rgba[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
exports.reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
exports.reRegExpFlags = /^(?:([gimuy])(?!.*\1)){0,5}$/;
exports.reRegExp = /^\/([\s\S]*)\/((?:([gimuy])(?!.*\3)){0,5})$/;
exports.reFunctionName = /\s*function\s+([^(\s]*)\s*/;
exports.reIsNativeFn = /\[native\scode\]/;
exports.reIsClass = /^class/;
exports.reStringToBoolean = /^true|[1-9]+$/gi;
exports.reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
exports.reIsHex = /^([A-Fa-f0-9]+|)$/;
exports.reIsJsonStart = /^\[|^\{(?!\{)/;
exports.reEndsWithBracket = /\]$/;
exports.reEndsWithBrace = /\}$/;
exports.reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };
