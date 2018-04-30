import { ObjectProto, objectGetPrototypeOf } from '../internal/prototypes.js';
import { FUNCTION } from '../internal/env.js';

export default function getPrototypeOf(object) {
	const proto = object.__proto__;
	if (proto || proto === null) {
		return proto;
	} else if (typeof object.constructor === 'function') {
		return object.constructor.prototype;
	} else if (object instanceof Object) {
		return ObjectProto;
	} else {
		// Correctly return null for Objects created with `Object.create(null)`
		// (shammed or native) or `{ __proto__: null}`.  Also returns null for
		// cross-realm objects on browser s that lack `__proto__` support (like
		// IE <11), but that's the best we can do.
		return null;
	}
}