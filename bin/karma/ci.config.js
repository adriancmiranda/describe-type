const base = require('./base.config');

module.exports = config => {
  config.set(Object.assign(base, {
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    concurrency: 2,
    captureTimeout: 4*60*1000,
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 4*60*1000,
    browserDisconnectTolerance: 3,
    reporters: ['spec'],
    plugins: base.plugins.concat([
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-spec-reporter',
    ]),
  }));
};
