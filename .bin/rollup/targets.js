const { env, flag } = require('../config');

const defaultFormats = ['iife', 'amd', 'umd'];

const target = (name, outputPath, format, interop) => ({
  name,
  sourcemap: env.MINIFY,
  file: `${outputPath}.${format}${env.MINIFY ? '.min' : ''}.js`,
  banner: env.SIGN ? flag : '',
  indent: env.INDENT,
  interop,
  format,
});

exports.parseFormats = ({ formats }) => {
  formats = typeof formats === 'string' || formats instanceof String ? [formats] : formats;
  formats = Array.isArray(formats) ? formats : defaultFormats;
  return formats;
};

exports.hasFormat = (file, format) => {
  const formats = exports.parseFormats(file);
  return formats.indexOf(format) !== -1;
};

exports.parseOutput = ({ module, output, formats, interop }) => {
  formats = exports.parseFormats({ formats });
  return formats.map(format => target(module, output, format, interop));
};
