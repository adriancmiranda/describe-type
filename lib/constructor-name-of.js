const typeOf = require('./of');

module.exports = function constructorNameOf(value) {
	const name = typeOf(value);
	return (name === 'Function' && Object(value).name) || name;
};
