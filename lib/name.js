const typeOf = require('./of');
const constructorNameOf = require('./constructor-name-of');

const varName = /^[^a-zA-Z_$]|[^\w|$]|[^\w$]$/g;

module.exports = function name(value, write) {
	const type = typeOf(value);
	if (type === 'Object' || value === undefined || value === null) {
		return type;
	}
	return Object(value).name || (write && type === 'String' ?
		value.replace(varName, '_') :
		constructorNameOf(value)
	);
};
