module.exports = (value, pattern) => {
	value = typeof value === 'string' || value instanceof String ? value : '';
	return pattern instanceof RegExp ? value.match(pattern) : value.split(/\s|-|_/g);
};
