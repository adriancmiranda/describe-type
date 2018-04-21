import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import stream from '../../../source/is/stream';

test('describeType.is.stream exposure', (t) => {
	t.is(toString.call(describeType.is.stream), '[object Function]', 'should be a function');
});

test('stream exposure', (t) => {
	t.is(toString.call(stream), '[object Function]', 'should be a function');
});

// 	it('O método "stream" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.stream), '[object Function]', 'should be a function');;
// 	});

// 	it('O método "stream.writable" deve existir no escopo do módulo "is"', () => {
// 		t.is(stream.writable, '[object Function]', 'should be a function');;
// 	});

// 	it('O método "stream.readable" deve existir no escopo do módulo "is"', () => {
// 		t.is(stream.readable, '[object Function]', 'should be a function');;
// 	});

// 	it('O método "stream.duplex" deve existir no escopo do módulo "is"', () => {
// 		t.is(stream.duplex, '[object Function]', 'should be a function');;
// 	});

// 	it('O método "stream.transform" deve existir no escopo do módulo "is"', () => {
// 		t.is(stream.transform, '[object Function]', 'should be a function');;
// 	});
// });
