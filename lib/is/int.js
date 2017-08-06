module.exports = function isInt(value) {
	return parseFloat(value, 10) === parseInt(value, 10);
};
