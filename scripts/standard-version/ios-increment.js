'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const expo_1 = require('./expo');
const helpers_1 = require('./helpers');
/**
 * Read the manifest version from the `expo.ios.buildNumber` property.
 */
exports.readVersion = helpers_1.iosVersionReader;
/**
 * Write the manifest version to the `expo.ios.buildNumber` property.
 * This uses the an incremental approach, and ignores the provided version.
 */
exports.writeVersion = (contents) => {
  const manifest = expo_1.parse(contents);
  manifest.expo.ios = manifest.expo.ios || {};
  const buildNumber = manifest.expo.ios.buildNumber !== undefined
    ? Number(manifest.expo.ios.buildNumber)
    : 0;

  if (Number.isNaN(buildNumber)) {
    throw new Error('Could not parse number from `expo.ios.buildNumber`.');
  }

  manifest.expo.ios.buildNumber = String(buildNumber + 1);

  return expo_1.serialize(manifest, contents);
};
