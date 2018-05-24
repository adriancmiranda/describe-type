// pattern(s)
export const reIsBase64 = /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
export const reFunctionName = /\s*function\s+([^(\s]*)\s*/;
export const reIsNativeFn = /\[native\scode\]/;
export const reStringToBoolean = /^true|[1-9]+$/gi;
export const reToPropName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;
export const reIsHex = /^([A-Fa-f0-9]+|)$/;
export const reIsHexadecimal = /^((#|0x)?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))?$/;
export const reIsJsonStart = /^\[|^\{(?!\{)/;
export const reEndsWithBracket = /\]$/;
export const reEndsWithBrace = /\}$/;
export const reIsJsonEnds = { '[': exports.reEndsWithBracket, '{': exports.reEndsWithBrace };
