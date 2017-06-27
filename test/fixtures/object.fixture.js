const originalName = ObjectFixture.name;

function ObjectFixture(name) {
	Object.defineProperty(ObjectFixture, 'name', {
		value: toString.call(name).slice(8, -1) === 'String' ? name : originalName,
	});
}

module.exports = ObjectFixture;
