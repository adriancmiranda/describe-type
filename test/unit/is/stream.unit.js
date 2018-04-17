import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#stream', () => {
	it('O método "stream" deve existir no escopo do módulo "is"', () => {
		expect(is.stream).toEqual(jasmine.any(Function));
	});

	it('O método "stream.writable" deve existir no escopo do módulo "is"', () => {
		expect(is.stream.writable).toEqual(jasmine.any(Function));
	});

	it('O método "stream.readable" deve existir no escopo do módulo "is"', () => {
		expect(is.stream.readable).toEqual(jasmine.any(Function));
	});

	it('O método "stream.duplex" deve existir no escopo do módulo "is"', () => {
		expect(is.stream.duplex).toEqual(jasmine.any(Function));
	});

	it('O método "stream.transform" deve existir no escopo do módulo "is"', () => {
		expect(is.stream.transform).toEqual(jasmine.any(Function));
	});
});
