'use strict';

var startsWith = require('../polyfill/String.prototype.startsWith.js');

var keys = require('../polyfill/Object.keys.js');

var create = require('../polyfill/Object.create.js');

var assign = require('../polyfill/Object.assign.js');

var reduce = require('../polyfill/Array.prototype.reduce.js');

var filter = require('../polyfill/Array.prototype.filter.js');

var _internalEnvJs = require('../internal/env.js');

var env = _internalEnvJs.env;

var stringify = require('../internal/stringify');

var typify = require('../internal/typify.js');

var any = require('../is/any.js');

var object = require('../is/object/object.js');

var string = require('../is/string/string.js');

var array = require('../is/array/array.js');

var notType = require('../is/not/not.type.js');

var notAny = require('../is/not/not.any.js');

var notInstanceOf = require('../is/not/not.instanceOf.js');

var asType = require('../as/as.type.js');

var asAny = require('../as/as.any.js');

var asInstanceOf = require('../as/as.instanceOf.js');

var PR0PERTIES = {
	type: true,
	required: true,
	strict: false,
	default: false
};

function schematize(patterns, settings) {
	var schema = asAny(Object, patterns) || create(null);
	var object = asAny(Object, settings) || create(null);
	return reduce(keys(schema), function (copy, key) {
		if (startsWith(key, '$')) {
			var slug = key.substring(1);
			var assert = { key: key, data: schema[key] };
			var config = { key: slug, data: object[slug] };
			var result = parseProperty(assert, config, copy);
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
		assert.data.default = asAny(assert.data.type, assert.data.default, config, chunk);
	}
	return assert.data;
}

function parseConfig(assert, config) {
	if (object(assert.data.default)) {
		config.data = schematize(assert.data.default, config.data);
	}
	if (any(assert.data.type, config.data)) {
		return config.data;
	}
	if ('default' in assert.data || !assert.data.required) {
		return assert.data.default;
	}
	return undefined;
}

function filterAssertProps(hash, onlyRequired) {
	return filter(keys(hash), function (key) {
		return onlyRequired ? hash[key] : key;
	});
}

function validateProp(prop, onlyRequired) {
	var requiredProps = filterAssertProps(PR0PERTIES, onlyRequired).join('|');
	return new RegExp('^(' + requiredProps + ')$').test(prop);
}

function validateRequiredProp(prop) {
	return validateProp(prop, true);
}

function validateAssert(hash) {
	var objRequired = filter(keys(hash), validateRequiredProp);
	var allRequired = filterAssertProps(PR0PERTIES, true);
	return objRequired.length === allRequired.length;
}

module.exports = schematize;
