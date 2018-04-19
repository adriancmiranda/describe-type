import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

describe('#buffer', () => {
	it('O método "buffer" deve existir no escopo do módulo "is"', () => {
		expect(is.buffer).toEqual(jasmine.any(Function));
	});
});

