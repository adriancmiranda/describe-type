var isBuffer = require('./is.buffer');

module.exports = function typeOf(value) {
	var type = Object.prototype.toString.call(value).slice(8, -1);
	var name = /^(Object|Error)$/.test(type) && Object(value.constructor).name;
	var nil = type === 'Number' && !isFinite(value) && value.toString();
	var buffer = type === 'Uint8Array' && isBuffer(value) && 'Buffer';
	var fn = type === 'Function' && /^function(\s){0,}\*/g.test(value.toString()) && 'GeneratorFunction';
	return name || nil || fn || buffer || type;
};
