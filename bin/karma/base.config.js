const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const { aliases, env, pack } = require('../config');

const webpack = {
  plugins: [new DefinePlugin(env)],
  devtool: '#inline-source-map',
  resolve: {
    alias: Object.assign({
      fixtures: resolve('test/fixtures'),
    }, aliases),
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['env'],
      },
    }],
  },
};

const karma = {
  webpack,
  basePath: '../../',
  port: 9876,
  colors: true,
  frameworks: ['jasmine', 'jasmine-matchers', 'sinon', 'fixture', 'phantomjs-shim'],
  files: [pack.main, {
    pattern: 'test/fixtures/**/*.fixture.*',
    watched: true,
  }, {
    pattern: 'test/unit/index.js',
    watched: true,
  }],
  preprocessors: {
    'test/unit/**/{index,*.unit}.js': ['webpack', 'sourcemap'],
    'test/fixtures/**/{index,*.fixture}.js': ['webpack', 'sourcemap'],
    'test/fixtures/**/*.fixture.html': ['html2js'],
    'test/fixtures/**/*.fixture.json': ['json_fixtures'],
  },
  webpackMiddleware: {
    noInfo: true,
  },
  jsonFixturesPreprocessor: {
    variableName: '__json__',
  },
};

karma.preprocessors[pack.main] = ['webpack', 'sourcemap'];
module.exports = karma;
