module.exports = function isNumeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
};
