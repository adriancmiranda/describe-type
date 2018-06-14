import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as is from './index.next';
import rgb from './rgb.next';

test('is exposure', (t) => {
	t.is(toString.call(is), '[object Object]', 'should be a namespace');
});

test('is/rgb exposure', (t) => {
	t.is(toString.call(is.rgb), '[object Function]', 'should be a function');
	t.is(toString.call(rgb), '[object Function]', 'should be a function');
});

test('rgb test', (t) => {
	t.true(rgb('rgb(255,0,0)'), 'rgb(255,0,0) should be a color');
});
