/* eslint-disable no-unused-vars */
import * as internal from './internal/index.next.js';
import * as has from './has/index.next.js';
import * as is from './is/index.next.js';

export * from './internal/index.next.js';
export { has, is };
export { default as as } from './as/index.next.js';
export { default as schema } from './schema/index.next.js';
export const version = { tag: '__VERSION__', sha1: '__COMMIT__', type: '__PTYPE__' };
