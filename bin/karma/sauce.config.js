const base = require('./base.config');
const browsers = require('./browsers.json');
const { argv } = require('../config');
const is = require('../@common/is');
const as = require('../@common/as');

const BrowsersReturnedConfig = {
  get keys() {
    return as(Array, Object.keys(browsers), []);
  },
  getBrowserList(key) {
    return Object.keys(this.fetch(key));
  },
  test(key) {
    return new RegExp(`^(${this.keys.join('|')})$`).test(key);
  },
  getOne(key) {
    return this.test(key) ? browsers[key] : null;
  },
  getAll() {
    return Object.assign.apply(Object, this.keys.map(key => browsers[key]));
  },
  fetch(key) {
    return as(Object, is(String, key) && this.getOne(key), this.getAll());
  },
};

module.exports = config => {
  const settings = Object.assign(base, {
    singleRun: true,
    browsers: BrowsersReturnedConfig.getBrowserList(argv.env),
    customLaunchers: BrowsersReturnedConfig.fetch(argv.env),
    reporters: process.env.CI ? ['dots', 'saucelabs'] : ['progress', 'saucelabs'],
    sauceLabs: {
      testName: 'describe-type unit tests',
      recordScreenshots: false,
      build: (
        process.env.TRAVIS_BUILD_NUMBER ||
        process.env.APPVEYOR_BUILD_NUMBER ||
        process.env.SAUCE_BUILD_ID ||
        Date.now()
      ),
      connectOptions: {
        'no-ssl-bump-domains': 'all',
      },
    },
  });
  if (argv.env === 'mobile') {
    settings.concurrency = 2;
    settings.browserDisconnectTolerance = 3;
    settings.captureTimeout = 300000;
    settings.browserNoActivityTimeout = 300000;
    settings.browserDisconnectTimeout = 300000;
  }
  config.set(settings);
};
