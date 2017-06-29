var isBuffer = require('./is.buffer');
var toString = require('./to-string');

module.exports = function typeOf(value) {
	var type = toString.call(value).slice(8, -1);
	var name = /^(Object|Error|Function)$/.test(type) && Object(value.constructor).name;
	var nil = type === 'Number' && !isFinite(value) && value.toString();
	var buffer = type === 'Uint8Array' && isBuffer(value) && 'Buffer';
	return name || nil || buffer || type;
};
