var toString = require('./to-string');

module.exports = function isArrayLike(value) {
	return (toString.call(value) === '[object Array]' ||
		(!!value &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			(value.length === 0 ||
				(value.length > 0 && (value.length - 1) in value)
			)
		)
	);
};
