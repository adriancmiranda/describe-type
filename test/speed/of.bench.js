const { Suite } = require('benchmark');
const type = require('../../');

new Suite()

.add('typeof', () => {
	typeof 'foo';
})

.add('type.of', () => {
	type.of('foo');
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\n\nFastest is ' + this.filter('fastest').map('name'));
})

.run({ async: true });
