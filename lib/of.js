const isBuffer = require('./is.buffer');

module.exports = function typeOf(value) {
	const type = Object.prototype.toString.call(value).slice(8, -1);
	const name = type === 'Object' && Object(value.constructor).name;
	const buffer = type === 'Uint8Array' && isBuffer(value) && 'Buffer';
	return name || buffer || type;
};
