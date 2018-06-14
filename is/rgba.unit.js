import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as is from './index.next';
import rgba from './rgba.next';

test('is exposure', (t) => {
	t.is(toString.call(is), '[object Object]', 'should be a namespace');
});

test('is/rgba exposure', (t) => {
	t.is(toString.call(is.rgba), '[object Function]', 'should be a function');
	t.is(toString.call(rgba), '[object Function]', 'should be a function');
});

test('rgba test', (t) => {
	t.true(rgba('rgba(255,0,0,0.1)'), 'rgb(255,0,0,0.1) should be a color with alpha');
});
