import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import { has } from './index.next';
import at from './at.next';
import own from './own.next';
import ownProperty from './ownProperty.next';
import ownValue from './ownValue.next';
import unsafeMethod from './unsafeMethod.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: unsafeMethod(${name}, () => ${label})`, () => {
		unsafeMethod(ctor, () => value);
	})

	.add(`${name}: describeType.has.unsafeMethod(${name}, () => ${label})`, () => {
		describeType.has.unsafeMethod(ctor, () => value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
