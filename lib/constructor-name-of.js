var typeOf = require('./of');

module.exports = function constructorNameOf(value) {
	var name = typeOf(value);
	return (name === 'Function' && Object(value).name) || name;
};
