'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const expo_1 = require('./expo');
const helpers_1 = require('./helpers');
/**
 * Read the manifest version from the `expo.android.versionCode` property.
 */
exports.readVersion = helpers_1.androidVersionReader;
/**
 * Write the manifest version to the `expo.android.versionCode` property.
 * This uses the an incremental approach, and ignores the provided version.
 */
exports.writeVersion = (contents) => {
  const manifest = expo_1.parse(contents);
  manifest.expo.android = manifest.expo.android || {};
  manifest.expo.android.versionCode = (manifest.expo.android.versionCode || 0) + 1;
  return expo_1.serialize(manifest, contents);
};
