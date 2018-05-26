import tosource from 'tosource';
import words from '../../.bin/@/words';
import capitalizeWord from '../../.bin/@/capitalizeWord';
import toPascalCase from '../../.bin/@/toPascalCase';
import toCamelCase from '../../.bin/@/toCamelCase';

const ObjectProto = Object.prototype;
const toString = ObjectProto.toString;
const hasOwnProperty = ObjectProto.hasOwnProperty;
const reFunctionName = /\s*function\s+([^(\s]*)\s*/;
const reIsJsonStart = /^\[|^\{(?!\{)/;
const reIsJsonEnds = { '[': /\]$/, '{': /\}$/ };
const reFormatTag = /\{\{([^}]+)}}/g;
const CONSTRUCTOR = 'constructor';
const hasProto = '__proto__' in {};

function getModernPrototypeOf(value) {
	return value.__proto__ || ObjectProto;
}

function getLegacyPrototypeOf(value) {
	if (hasOwnProperty.call(value, CONSTRUCTOR)) {
		return ObjectProto;
	}
	return value.constructor.prototype;
}

export const getPrototypeOf = hasProto ? getModernPrototypeOf : getLegacyPrototypeOf;

export function isLikeJson(value) {
	if (value != null && value.constructor === String) {
		const start = value.match(reIsJsonStart);
		return !!(start && reIsJsonEnds[start[0]].test(value));
	}
	return false;
}

export function isArraylike(value) {
	return value && typeof value !== 'boolean' &&
	hasOwnProperty.call(value, 'length') &&
	isFinite(value.length) &&
	typeof value.length === 'number' &&
	value.length >= 0;
}

export function constructorOf(value, selfConstructor) {
	if (value == null) return value;
	if (value.constructor === Function) return selfConstructor ? value : Function;
	return value.constructor || Object;
}

export function constructorNameOf(value) {
	if (value == null) return toPascalCase(value);
	if (value.constructor === Function) {
		if (!value.name || value.name === 'Object') {
			const match = String(value).match(reFunctionName, '');
			if (match && match[1]) return match[1];
		}
		return value.name || value.constructor.name;
	} else if (typeof value === 'object') {
		return constructorNameOf(value.constructor || Object);
	} else if (typeof value === 'number' || value instanceof Number) {
		return value !== value || value === (value - 1) ? String(value) : 'Number';
	}
	const type = toString.call(value).slice(8, -1);
	if (type === 'Arguments' || (type !== 'Array' && isArraylike(value))) {
		if (type === 'Object' && typeof value.callee === 'function') {
			return 'Arguments';
		}
	}
	return type;
}

export function inherits(ctor, superCtor) {
	Object.setPrototypeOf(ctor, superCtor);
	function Surrogate() { this.constructor = ctor; }
	ctor.prototype = superCtor === null ? Object.create(null) :
	(Surrogate.prototype = superCtor.prototype, new Surrogate());
	if (superCtor != null) {
		Surrogate.prototype.super = superCtor.prototype;
	}
	return ctor.prototype;
}

export function toSource(value) {
	let src = tosource(value);
	const ctor = value && value.constructor;
	if (isLikeJson(src) && ctor !== Array && ctor !== Object && String(value.valueOf).indexOf('native') > -1) {
		const name = constructorNameOf(value);
		if (name === 'Symbol') {
			return String(value);
		}
		const raw = value.valueOf();
		const args = /^(Number|Boolean)$/.test(name) ? raw : JSON.stringify(raw);
		return `new ${name}(${args})`;
	}
	return src.replace(/[\n\r]/g, '');
}

export function alias(name) {
	return function aliasClosure() {
		return this[name].apply(this, arguments);
	};
}

export function pad(value, width, char = '0') {
	const val = String(value);
	return val.length >= width ? val : new Array((width - val.length) + 1).join(char) + val;
}

export function format(template, param) {
	return template && param && param.hasOwnProperty ?
		template.replace(reFormatTag, function replace(all, key) {
			if (hasOwnProperty.call(param, key)) {
				return param[key];
			}
			return all;
		}) : template
	;
}

export function init(Ctor, args, context) {
	return function nu() {
		switch (args.length) {
			case 0: return new Ctor();
			case 1: return new Ctor(args[0]);
			case 2: return new Ctor(args[0], args[1]);
			case 3: return new Ctor(args[0], args[1], args[2]);
			case 4: return new Ctor(args[0], args[1], args[2], args[3]);
			case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
			case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
			case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
			case 8: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
			case 9: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
			default: return Ctor.apply(context, args);
		}
	};
}

export function applyAndNew(constructor, args) {
	if (constructor === undefined || constructor === null) return constructor;
	const partial = init(constructor, args);
	if (typeof constructor.prototype === 'object') {
		partial.prototype = Object.create(constructor.prototype);
	}
	return partial;
}
