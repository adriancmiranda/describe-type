import test from 'ava';
import * as type from '../../../source';

test('foo', t => {
	t.pass();
});
// test('#booleanOf', (t) => {
// 	it('exposed', (t) => {
// 		t.is(toString.call(type.booleanOf), '[object Function]', 'should be a function');;
// 	});

// 	it('0 should be false', (t) => {
// 		t.is(type.booleanOf(0), false);
// 	});

// 	it('1 should be true', (t) => {
// 		t.is(type.booleanOf(1), true);
// 	});

// 	it('"true" should be true', (t) => {
// 		t.is(type.booleanOf('true'), true);
// 	});

// 	it('"false" should be false', (t) => {
// 		t.is(type.booleanOf('false'), false);
// 	});

// 	it('NaN should be false', (t) => {
// 		t.is(type.booleanOf(NaN), false);
// 	});

// 	it('Infinity should be true', (t) => {
// 		t.is(type.booleanOf(Infinity), true);
// 	});

// 	it('"0" should be false', (t) => {
// 		t.is(type.booleanOf('0'), false);
// 	});

// 	it('"1" should be true', (t) => {
// 		t.is(type.booleanOf('1'), true);
// 	});
// });
