// import { env } from '../@/env.js';
// import reduce from '../@/reduce.js';
import startsWith from '../@/startsWith.js';
// import filter from '../@/filter.js';
// import keys from '../@/keys.js';
// import create from '../@/create.js';
// import assign from '../@/assign.js';
// import stringify from '../@/stringify';

// import typify from '../built-in/typify.js';

// import any from '../is/any.js';
// import object from '../is/object.js';
// import string from '../is/string.js';
// import array from '../is/array.js';
// import not from '../is/not.js';
// import notInstanceOf from '../is/not.instanceOf.js';

// import asAny from '../as/as.any.js';
// import asInstanceOf from '../as/as.instanceOf.js';

// import SchemaError from './SchemaError';

// const SCHEMA_PROPS = {
// 	type: true,
// 	required: true,
// 	strict: false,
// 	default: false,
// };

function schematize(pattern, settings) {
// 	const schema = as(Object, patterns) || create(null);
// 	const object = as(Object, settings) || create(null);
// 	return reduce(internal.keys(schema), (copy, key) => {
// 		if (startsWith(key, '$')) {
// 			const slug = key.substring(1);
// 			const assert = { key, data: schema[key] };
// 			const config = { key: slug, data: object[slug] };
// 			const result = parseProperty(assert, config, copy);
// 			copy[result.key] = result.data;
// 		}
// 		return copy;
// 	}, create(null));
}

// function parseProperty(assert, config, chunk) {
// 	assert.data = parseAssert(assert, config, chunk);
// 	config.data = parseConfig(assert, config);
// 	return config;
// }

// function parseAssert(assert, config, chunk) {
// 	return assert.data;
// }

// function parseConfig(assert, config) {
// 	if (is.object(assert.data.default)) {
// 		config.data = schematize(assert.data.default, config.data);
// 	}
// 	if ('default' in assert.data || !assert.data.required) {
// 		return assert.data.default;
// 	}
// 	return undefined;
// }

// function filterAssertProps(object, onlyRequired) {
// 	return filter(internal.keys(object), (key) => onlyRequired ? object[key] : key);
// }

// function validateProp(prop, onlyRequired) {
// 	const requiredProps = filterAssertProps(SCHEMA_PROPS, onlyRequired).join('|');
// 	return new RegExp(`^(${requiredProps})$`).test(prop);
// }

// function validateRequiredProp(prop) {
// 	return validateProp(prop, true);
// }

// function validateAssert(object) {
// 	const objRequired = filter(internal.keys(object), validateRequiredProp);
// 	const allRequired = filterAssertProps(SCHEMA_PROPS, true);
// 	return objRequired.length === allRequired.length;
// }

export default schematize;
