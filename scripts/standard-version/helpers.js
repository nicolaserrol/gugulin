'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const expo_1 = require('./expo');
/**
 * The default android version reader.
 * It reads the value from `expo.android.versionCode` and returns it as string.
 */
exports.androidVersionReader = (contents) => {
  var _a;
  return (String(((_a = expo_1.parse(contents).expo.android) === null || _a === void 0 ? void 0 : _a.versionCode) || ''));
};
/**
 * The default ios version reader.
 * It reads the value from `expo.ios.buildNumber` and returns it as string.
 */
exports.iosVersionReader = (contents) => {
  var _a;
  return (((_a = expo_1.parse(contents).expo.ios) === null || _a === void 0 ? void 0 : _a.buildNumber) || '');
};
