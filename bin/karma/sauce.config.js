const base = require('./base.config');

module.exports = config => {
	config.set(Object.assign(base, {
		singleRun: true,
		reporters: process.env.CI ? ['dots', 'saucelabs'] : ['progress', 'saucelabs'],
		sauceLabs: {
			testName: 'describe-type unit tests',
			recordScreenshots: false,
		},
	}));
};
