module.exports = (value) => {
	value = typeof value === 'string' || value instanceof String ? value : '';
	return value.charAt(0).toUpperCase() + value.substring(1);
};
