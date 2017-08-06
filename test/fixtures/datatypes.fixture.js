/*
eslint-disable
no-empty-function,
no-array-constructor,
no-new-wrappers,
no-new-object,
no-undef
*/
import Exotic from './exotic.fixture';

const datatype = (slug, type, name, data) => ({
	text: `${name}: ${slug}`,
	slug: `${name}: ${slug}`,
	data: data,
	type: type,
	name: String(name || type.name).toLowerCase(),
	seal: `[object ${name}]`,
});

export default [
	// undef
	datatype('#001', undefined, 'undefined'),

	// nil
	datatype('#002', null, 'null', null),

	// bool
	datatype('#003', Boolean, 'Boolean', new Boolean(true)),
	datatype('#004', Boolean, 'Boolean', new Boolean(false)),
	datatype('#005', Boolean, 'Boolean', true),
	datatype('#006', Boolean, 'Boolean', false),

	// string
	datatype('#007', String, 'String', new String('foo')),
	datatype('#008', String, 'String', Object('')),
	datatype('#009', String, 'String', 'bar'),
	datatype('#010', String, 'String', ''),

	// object
	datatype('#011', Object, 'Object', new Object()),
	datatype('#012', Object, 'Object', new Object({ foo: 'bar' })),
	datatype('#013', Object, 'Object', { foo: 'bar' }),
	datatype('#014', Object, 'Object', Object.create(null)),
	datatype('#015', Object, 'Object', {}),
	datatype('#016', Object, 'Object', { 0: NaN, length: 0 }),
	datatype('#017', Object, 'Object', { 0: 'foo', length: 1 }),
	datatype('#018', Object, 'Object', { length: 0 }),

	// array
	datatype('#019', Array, 'Array', new Array(4)),
	datatype('#020', Array, 'Array', [undefined, undefined, undefined]),
	datatype('#021', Array, 'Array', ['foo', 'bar', 'baz', 1, 2, 3]),
	datatype('#022', Array, 'Array', [0, 1, undefined]),
	datatype('#023', Array, 'Array', new Array()),
	datatype('#024', Array, 'Array', []),

	// fn
	datatype('#025', Function, 'Function', function* foo() {}),
	datatype('#026', Function, 'Function', function foo() {}),
	datatype('#027', Function, 'Function', () => {}),

	// number
	datatype('#028', Number, 'Number', new Number(92)),
	datatype('#029', Number, 'Number', 0x12),
	datatype('#030', Number, 'Number', 12e1),
	datatype('#031', Number, 'Number', 13),
	datatype('#032', Number, 'Number', 10),
	datatype('#033', Number, 'Number', 5),
	datatype('#034', Number, 'Number', 2),
	datatype('#035', Number, 'Number', 3),
	datatype('#036', Number, 'Number', -10),
	datatype('#037', Number, 'Number', -5),
	datatype('#038', Number, 'Number', -2),
	datatype('#039', Number, 'Number', -3),
	datatype('#040', Number, 'Number', 0),
	datatype('#041', Number, 'Number', 1.1),
	datatype('#042', Number, 'Number', 1.2),
	datatype('#043', Number, 'Number', 1.3),
	datatype('#044', Number, 'Number', 1 / 0),
	datatype('#045', Number, 'Number', -Infinity),
	datatype('#046', Number, 'Number', Infinity),
	datatype('#047', Number, 'Number', parseFloat('FF2')),
	datatype('#048', Number, 'Number', -NaN),
	datatype('#049', Number, 'Number', NaN),

	// regexp
	datatype('#050', RegExp, 'RegExp', new RegExp('foo', 'gim')),
	datatype('#051', RegExp, 'RegExp', /bar/gim),

	// date
	datatype('#052', Date, 'Date', new Date()),

	// error
	datatype('#053', Error, 'Error', new Error('foo')),
	datatype('#054', EvalError, 'EvalError', new EvalError('foo')),
	datatype('#055', RangeError, 'RangeError', new RangeError('foo')),
	datatype('#056', ReferenceError, 'ReferenceError', new ReferenceError('foo')),
	datatype('#057', SyntaxError, 'SyntaxError', new SyntaxError('foo')),
	datatype('#058', TypeError, 'TypeError', new TypeError('foo')),
	datatype('#059', URIError, 'URIError', new URIError('foo')),

	// symbol
	datatype('#060', Symbol, 'Symbol', Symbol('foo')),

	// element
	datatype('#061', global.HTMLCollection, 'HTMLCollection', global.document && document.body.children),
	datatype('#062', global.HTMLDivElement, 'HTMLDivElement', global.document && document.createElement('div')),

	// a
	datatype('#063', Exotic, 'Exotic', new Exotic()),
	datatype('#064', Exotic, 'Custom', new Exotic('Custom')),
	datatype('#065', Map, 'Map', new Map()),
	datatype('#066', WeakMap, 'WeakMap', new WeakMap()),
	datatype('#067', Set, 'Set', new Set()),
	datatype('#068', WeakSet, 'WeakSet', new WeakSet()),
	datatype('#069', Int8Array, 'Int8Array', new Int8Array(2)),
	datatype('#070', Uint8Array, 'Uint8Array', new Uint8Array([21, 31])),
	datatype('#071', Uint8ClampedArray, 'Uint8ClampedArray', new Uint8ClampedArray(16)),
	datatype('#072', Int16Array, 'Int16Array', new Int16Array(8)),
	datatype('#073', Uint16Array, 'Uint16Array', new Uint16Array(32)),
	datatype('#074', Int32Array, 'Int32Array', new Int32Array(4)),
	datatype('#075', Uint32Array, 'Uint32Array', new Uint32Array(8)),
	datatype('#076', Float32Array, 'Float32Array', new Float32Array(64)),
	datatype('#077', Float64Array, 'Float64Array', new Float64Array(32)),
	datatype('#078', ArrayBuffer, 'ArrayBuffer', new ArrayBuffer(4)),
];
