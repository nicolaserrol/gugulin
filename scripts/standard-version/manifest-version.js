'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const expo_1 = require('./expo');
/**
 * Read the manifest version from the `expo.version` property.
 */
exports.readVersion = (contents) => (expo_1.parse(contents).expo.version || '');
/**
 * Write the manifest version to the `expo.version` property.
 */
exports.writeVersion = (contents, version) => {
  const manifest = expo_1.parse(contents);
  manifest.expo.version = version;
  return expo_1.serialize(manifest, contents);
};
