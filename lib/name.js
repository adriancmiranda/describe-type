var typeOf = require('./of');
var constructorNameOf = require('./constructor-name-of');

var varName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

module.exports = function name(value, write) {
	var type = typeOf(value);
	if (type === 'Object' || value === undefined || value === null) {
		return type;
	}
	return Object(value).name || (write && type === 'String' ?
		value.replace(varName, '_') :
		constructorNameOf(value)
	);
};
