import notType from '../is/not/not.type.next.js';
import each from '../internal/each.next.js';

/**
 *
 * @function
 * @param {Object} proto - The object which should be the prototype of the newly-created object.
 * @param {Object} properties - Optional. If specified and not undefined, an object whose
 * enumerable own properties (that is, those properties defined upon itself and not enumerable
 * properties along its prototype chain) specify property descriptors to be added to the
 * newly-created object, with the corresponding property names. These properties correspond to
 * the second argument of `Object.defineProperties()`.
 * @returns {Object}
 */
export default Object.create || function create(proto, properties) {
	if (proto === null) return {};
	if (notType(Object, proto)) {
		throw new TypeError('Object prototype may only be an Object or null: ' + (typeof proto));
	}
	const Instance = function () {};
	Instance.prototype = proto;
	proto = new Instance();
	each(properties, (value, property) => {
		proto[property] = value.value;
	});
	return proto;
}
