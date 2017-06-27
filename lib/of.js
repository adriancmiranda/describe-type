var isBuffer = require('./is.buffer');

module.exports = function typeOf(value) {
	var type = Object.prototype.toString.call(value).slice(8, -1);
	var name = type === 'Object' && Object(value.constructor).name;
	var buffer = type === 'Uint8Array' && isBuffer(value) && 'Buffer';
	return name || buffer || type;
};
