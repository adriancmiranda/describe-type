module.exports = function isPrimitive(value) {
	return typeof value === 'function' || value !== Object(value);
};
