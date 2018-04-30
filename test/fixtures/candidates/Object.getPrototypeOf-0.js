import { ObjectProto } from '../internal/prototypes.js';
import { objectGetPrototypeOf, objectHasOwnProperty } from '../internal/built-in.js';
import { CONSTRUCTOR } from '../internal/env.js';

export default (value) => {
	const ctor = value.constructor;
	if (ctor === undefined) return ObjectProto;
	return value.__proto__ || objectGetPrototypeOf(value) || (() => {
		if (objectHasOwnProperty.call(value, CONSTRUCTOR)) {
			return ObjectProto;
		}
		return ctor.prototype;
	})();
};
