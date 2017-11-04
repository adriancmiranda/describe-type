/* eslint-disable no-use-before-define */
const originalName = Custom.name;
const toStr = Object.prototype.toString;

function Custom(name) {
	name = toStr.call(name).slice(8, -1) === 'String' && name.length ? name : originalName;
	try {
		Object.defineProperty(Custom, 'name', {
			value: name,
		});
	} catch (err) {
		try {
			Custom.name = name;
		} catch (error) {
			this.ignore = true;
		}
	}
}

Custom.supportsCustomization = !(new Custom('Supports')).ignore;
export default Custom;
