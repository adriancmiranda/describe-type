import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

describe('#args', () => {
	it('O método "args" deve existir no escopo do módulo "is"', () => {
		expect(is.args).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.args.iterate(datatype => {
			it(`${datatype.id} • args(${datatype.label}); // true`, () => {
				expect(is.args(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.add(datatypes.arraylikeObject);
		datatypes.all.add(datatypes.arraylikeNative);
		datatypes.all.remove(datatypes.args);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • args(${datatype.label}); // false`, () => {
				expect(is.args(datatype.value)).toBe(false);
			});
		});
		datatypes.all.remove(datatypes.arraylikeObject);
		datatypes.all.remove(datatypes.arraylikeNative);
		datatypes.all.add(datatypes.args);
	});
});

