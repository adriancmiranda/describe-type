/* eslint-disable no-use-before-define */
const originalName = Exotic.name;

export default function Exotic(name) {
	Object.defineProperty(Exotic, 'name', {
		value: toString.call(name).slice(8, -1) === 'String' ? name : originalName,
	});
}
