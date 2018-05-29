import startsWith from '../polyfill/String.prototype.startsWith.next.js';
import keys from '../polyfill/Object.keys.next.js';
import create from '../polyfill/Object.create.next.js';
import assign from '../polyfill/Object.assign.next.js';
import reduce from '../polyfill/Array.prototype.reduce.next.js';
import filter from '../polyfill/Array.prototype.filter.next.js';
import { env } from '../internal/env.next.js';
import stringify from '../internal/stringify.next.js';
import typify from '../internal/typify.next.js';
import any from '../is/any.next.js';
import object from '../is/object/object.next.js';
import string from '../is/string/string.next.js';
import array from '../is/array/array.next.js';
import notType from '../is/not/not.type.next.js';
import notAny from '../is/not/not.any.next.js';
import notInstanceOf from '../is/not/not.instanceOf.next.js';
import asType from '../as/as.type.next.js';
import asAny from '../as/as.any.next.js';
import asInstanceOf from '../as/as.instanceOf.next.js';

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

export default schematize;
