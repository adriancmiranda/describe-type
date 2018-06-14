// pattern(s)
export const reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
export const reIsRGB = /(rgb[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])?[)])/i;
export const reIsRGBA = /(rgba[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
export const reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
export const reRegExpFlags = /^(?:([gimuy])(?!.*\1)){0,5}$/;
export const reRegExp = /^\/([\s\S]*)\/((?:([gimuy])(?!.*\3)){0,5})$/;
export const reFunctionName = /\s*function\s+([^(\s]*)\s*/;
export const reIsNativeFn = /\[native\scode\]/;
export const reIsClass = /^class/;
export const reStringToBoolean = /^true|[1-9]+$/gi;
export const reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
export const reIsHex = /^([A-Fa-f0-9]+|)$/;
export const reIsJsonStart = /^\[|^\{(?!\{)/;
export const reEndsWithBracket = /\]$/;
export const reEndsWithBrace = /\}$/;
export const reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };
