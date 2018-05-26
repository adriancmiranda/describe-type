import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import ownProperty from './ownProperty';

const value = {
	"A": 329.5562145531701,
	"r": 26.143494324762816,
	"a": 30.839810129349885,
	"y": 382.8652049927137,
	".": 209.46051680295318,
	"p": 137.36783262171326,
	"o": 219.8572800988794,
	"t": 288.9968742238308,
	"e": 194.62894110794738,
	"s": 224.23908483789333,
	"l": 424.41911251825417,
	"i": 477.9652177588223,
	"c": 330.74371750226663,
	"(": 104.86047260472742,
	")": 272.78370122420034,
	" ": 4.4292658503792826,
	"T": 378.70883698486125,
	"h": 259.51928886360355,
	"m": 84.64812804711951,
	"d": 22.069789149926745,
	"u": 239.72145926209964,
	"n": 227.63784974188695,
	"w": 6.747560890985382,
	"f": 352.7482758607275,
	"b": 251.69349658342287,
	"j": 203.1028006554987,
	"g": 436.6636307730445
};

const cachedHasOwnProperty = Object.prototype.hasOwnProperty;

new Suite()

.add('Object.prototype.hasOwnProperty', () => {
	Object.prototype.hasOwnProperty.call(value, ')');
})

.add('Object.prototype.hasOwnProperty cached', () => {
	cachedHasOwnProperty.call(value, ')');
})

.add('describeType.has.ownProperty', () => {
	ownProperty(value, ')');
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
