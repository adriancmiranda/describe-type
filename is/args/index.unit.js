import test from 'ava';
import * as describeType from '../../index.next';
import args from './args.next';

datatypes.args.iterate(({ id, name, seal, label, ctor, value }) => {
	test(`${id} • index.args(${label}, ${ctor});`, (t) => {
		t.true(args(value), 'should be argument');
	});
});
