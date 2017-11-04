import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '~/is';

describe('#base64', () => {
	it('O método "base64" deve existir no escopo do módulo "is"', () => {
		expect(is.base64).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.base64.iterate(datatype => {
			it(`${datatype.id} • base64(${datatype.label}); // true`, () => {
				expect(is.base64(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.remove(datatypes.string);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • base64(${datatype.label}); // false`, () => {
				expect(is.base64(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.string);
	});
});