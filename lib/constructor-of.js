module.exports = function constructorOf(value) {
	if (value === undefined || value === null) {
		return value;
	}
	return Object(value).constructor || Object;
};
