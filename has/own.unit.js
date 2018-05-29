import test from 'ava';
import * as describeType from '../index.next';
import own from './own';

test('describeType.has.own exposure', (t) => {
	t.is(toString.call(describeType.has.own), '[object Function]', 'should be a function');
});

test('own exposure', (t) => {
	t.is(toString.call(own), '[object Function]', 'should be a function');
});

test('own: at list', (t) => {
	t.true(own(['foobar', 'fubar'], 'fubar'), 'should have "fubar" at list');
});

test('own: at object', (t) => {
	t.true(own({ a:'foobar', b:'fubar', c:['foo', 'bar'] }, 'b'), 'should have "b" at object');
});
