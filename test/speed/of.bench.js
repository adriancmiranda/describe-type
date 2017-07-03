const { Suite } = require('benchmark');
const type = require('../../');

new Suite()

.add('typeof', () => {
	typeof 'foo';
})

.add('type.of', () => {
	type.of('foo');
})

.add('Object.prototype.toString.call', () => {
	Object.prototype.toString.call('foo');
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
