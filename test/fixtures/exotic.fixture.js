/* eslint-disable no-use-before-define */
const originalName = Exotic.name;
const toStr = Object.prototype.toString;

function Exotic(name) {
	name = toStr.call(name).slice(8, -1) === 'String' ? name : originalName;
	try {
		Object.defineProperty(Exotic, 'name', {
			value: name,
		});
	} catch (err) {
		try {
			Exotic.name = name;
		} catch (error) {
			this.ignore = true;
		}
	}
}

const instance = new Exotic('Supports');
Exotic.supportsCustomization = !instance.ignore;
export default Exotic;
