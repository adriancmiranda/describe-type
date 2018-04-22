const reArg = /^--?(.+)/;
const reParam = /=/;

module.exports = (argv) => {
	argv = Array.prototype.slice.call(argv);
	return argv.reduce((keys, key, index) => {
		if (reArg.test(key)) {
			const argvalues = key.split(reParam);
			let argname = key.replace(reArg, '$1');
			let argvalue = argv[index + 1];
			if (argvalues.length === 1) {
				argvalue = true;
			} else if (argvalues.length === 2) {
				argname = argvalues[0].replace(reArg, '$1');
				argvalue = argvalues[1];
			}
			if (argname in keys) {
				keys[argname] = [keys[argname]].concat([argvalue]);
			} else {
				keys[argname] = argvalue;
			}
		} else if (index > 1) {
			keys.$0[keys.$0.length] = key;
		}
		return keys;
	}, Object.create(null, { $0: { writable: false, value: [] } }));
};
