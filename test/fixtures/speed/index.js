import colors from 'colors';

export const benchmarkFatestStatus = (reVendorMethod, progress, loaded, total) => {
	benchmarkFatestStatus.fails = benchmarkFatestStatus.fails || 0;
	benchmarkFatestStatus.warnings = benchmarkFatestStatus.warnings || 0;
	return function () {
		let statusColor = colors.green;
		const fastestList = this.filter('fastest').map('name');
		if (reVendorMethod.test(fastestList[0])) {
			statusColor = colors.red;
			benchmarkFatestStatus.fails += 1;
		} else if (reVendorMethod.test(fastestList[1])) {
			statusColor = colors.yellow;
			benchmarkFatestStatus.warnings += 1;
		}
		let timeline = '';
		if (progress && loaded && total) {
			timeline = colors.underline(`${progress}% - ${loaded} de ${total}`);
			timeline = `\n${timeline}`;
		}
		console.log(`\nFastest is: ${fastestList.length > 1 ? '\n' : ''}${statusColor(fastestList.join('\n'))}${timeline}\n`);
		if (loaded && total && loaded === total) {
			console.log(`--`);
			console.log(colors.yellow(`warnings: ${benchmarkFatestStatus.warnings}`));
			console.log(colors.red(`fails: ${benchmarkFatestStatus.fails}`));
			console.log(colors.inverse(`total: ${total}`));
			console.log(colors.inverse(`perf: ${Math.round((benchmarkFatestStatus.fails/total) * 100)}\n`));
			benchmarkFatestStatus.fails = 0;
			benchmarkFatestStatus.warnings = 0;
		}
	};
};

export const benchmarkCycle = () => {
	return function ({ target }) {
		console.log(String(target).replace(/(\d{1,3},\d{1,3},\d{1,3})/, colors.underline('$1')));
	};
};
