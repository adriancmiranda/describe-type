const startsWith = require('../ponyfill/String.prototype.startsWith.js');
const keys = require('../ponyfill/Object.keys.js');
const create = require('../ponyfill/Object.create.js');
const assign = require('../ponyfill/Object.assign.js');
const reduce = require('../ponyfill/Array.prototype.reduce.js');
const filter = require('../ponyfill/Array.prototype.filter.js');
const { env } = require('../internal/env.js');
const stringify = require('../internal/stringify/index.js');
const typify = require('../internal/typify.js');
const any = require('../is/any.js');
const object = require('../is/object/object.js');
const string = require('../is/string/string.js');
const array = require('../is/array/array.js');
const notType = require('../is/not/not.type.js');
const notAny = require('../is/not/not.any.js');
const notInstanceOf = require('../is/not/not.instanceOf.js');
const asType = require('../as/as.type.js');
const asAny = require('../as/as.any.js');
const asInstanceOf = require('../as/as.instanceOf.js');

const PR0PERTIES = {
	type: true,
	required: true,
	strict: false,
	'default': false
};

function schematize(patterns, settings) {
	const schema = asAny(Object, patterns) || create(null);
	const entity = asAny(Object, settings) || create(null);
	return reduce(keys(schema), (copy, key) => {
		if (startsWith(key, '$')) {
			const slug = key.substring(1);
			const assert = { key, data: schema[key] };
			const config = { key: slug, data: entity[slug] };
			const result = parseProperty(assert, config, copy);
			copy[result.key] = result.data;
		}
		return copy;
	}, create(null));
}

function parseProperty(assert, config, chunk) {
	assert.data = parseAssert(assert, config, chunk);
	config.data = parseConfig(assert, config);
	return config;
}

function parseAssert(assert, config, chunk) {
	if (any([String, Function, Array, null, undefined], assert.data)) {
		return { type: assert.data, required: PR0PERTIES.required };
	}
	if ('default' in assert.data) {
		assert.data['default'] = asAny(assert.data.type, assert.data['default'], config, chunk);
	}
	return assert.data;
}

function parseConfig(assert, config) {
	if (object(assert.data['default'])) {
		config.data = schematize(assert.data['default'], config.data);
	}
	if (any(assert.data.type, config.data)) {
		return config.data;
	}
	if ('default' in assert.data || !assert.data.required) {
		return assert.data['default'];
	}
	return undefined;
}

function filterAssertProps(hash, onlyRequired) {
	return filter(keys(hash), (key) => onlyRequired ? hash[key] : key);
}

function validateProp(prop, onlyRequired) {
	const requiredProps = filterAssertProps(PR0PERTIES, onlyRequired).join('|');
	return new RegExp(`^(${requiredProps})$`).test(prop);
}

function validateRequiredProp(prop) {
	return validateProp(prop, true);
}

function validateAssert(hash) {
	const objRequired = filter(keys(hash), validateRequiredProp);
	const allRequired = filterAssertProps(PR0PERTIES, true);
	return objRequired.length === allRequired.length;
}

module.exports = schematize;
