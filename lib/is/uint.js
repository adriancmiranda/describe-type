const isInt = require('./int');

module.exports = function isUint(value) {
	return isInt(value) && value >= 0;
};
