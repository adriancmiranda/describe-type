import { toSource, constructorNameOf } from 'fixtures/datatype/utils';
import * as is from '~/is';

describe('#vector', () => {
	it('O método "vector" deve existir no escopo do módulo "is"', () => {
		expect(is.vector).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		[
			{ type: Number, value: [1, 2, 3, 4.5, 2] },
			{ type: Number, value: [0, -1, -2, -4.5, -20] },
			{ type: String, value: ['foo', 'bar', 'baz'] },
			{ type: Array, value: [[1, 0, 0, 0, 1], [0, 1], [0, 0]] },
			{ type: Object, value: [Object.create(null), {}, { hello: 'foo' }] },
			{ type: Function, value: [function () {}] },
			{ type: undefined, value: [] },
			{ type: null, value: [] },
			{ type: Boolean, value: [true, false, true] },
			{ type: RegExp, value: [/foo/, /bar/, /baz/] },
		].forEach(datatype => {
			it(`vector(${constructorNameOf(datatype.type)}, ${toSource(datatype.value)}); // true`, () => {
				expect(is.vector(datatype.type, datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		[
			{ type: String, value: [1, 2, 3, 4.5, 2] },
			{ type: Array, value: [0, -1, -2, -4.5, -20] },
			{ type: Number, value: ['foo', 'bar', 'baz'] },
			{ type: RegExp, value: [[1, 0, 0, 0, 1], [0, 1], [0, 0]] },
			{ type: Object, value: [true, false, true] },
			{ type: Boolean, value: [/foo/, /bar/, /baz/] },
		].forEach(datatype => {
			it(`vector(${constructorNameOf(datatype.type)}, ${toSource(datatype.value)}); // false`, () => {
				expect(is.vector(datatype.value)).toBe(false);
			});
		});
	});
});

