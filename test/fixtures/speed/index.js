import colors from 'colors';

export const benchmarkFatestStatus = (reVendorMethod, progress, loaded, total) => {
	start.call(benchmarkFatestStatus);
	return function () {
		const status = next.call(benchmarkFatestStatus, this);
		const fastestLength = status.fastest.length;
		const fastestResult = status.color(status.fastest.join('\n'));
		const prefix = fastestLength > 1 ? '\n' : '';
		console.log(`\nFastest is: ${prefix}${fastestResult}${status.timeline}\n`);
		if (loaded && total && loaded === total) done.call(benchmarkFatestStatus);
	};

	function start() {
		this.success = this.success || 0
		this.warnings = this.warnings || 0;
		this.fails = this.fails || 0;
	}

	function next(data) {
		const fastest = data.filter('fastest').map('name');
		const isFailedHard = reVendorMethod.test(fastest[0]);
		const isFailedSoft = reVendorMethod.test(fastest[1]);
		const color = colors[isFailedHard ? 'red' : isFailedSoft ? 'yellow' : 'green'];
		const showProgress = !!(progress && loaded && total);
		const progressLabel = `${progress}% - ${loaded} de ${total}`;
		const timeline = showProgress ? `\n${colors.underline(progressLabel)}` : '';
		isFailedHard ? this.fails++ : isFailedSoft ? this.warnings++ : this.success++;
		return { color, fastest, timeline };
	}

	function done() {
		console.log(`--`);
		console.log(colors.green(`success: ${this.success}`));
		console.log(colors.yellow(`warnings: ${this.warnings}`));
		console.log(colors.red(`fails: ${this.fails}`));
		console.log(colors.underline(`total: ${total}`));
		console.log(colors.underline(`perf: ${100 - Math.round((this.fails / total) * 100)}%\n`));
		this.success = this.warnings = this.fails = 0;
	}
};

export const benchmarkCycle = () => {
	return function ({ target }) {
		console.log(String(target).replace(/(\d{1,3},\d{1,3},\d{1,3})/, colors.underline('$1')));
	};
};
