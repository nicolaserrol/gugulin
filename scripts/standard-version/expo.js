'use strict';

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};

Object.defineProperty(exports, '__esModule', { value: true });

const json_file_1 = __importDefault(require('@expo/json-file'));
const detect_indent_1 = __importDefault(require('detect-indent'));
const detect_newline_1 = __importDefault(require('detect-newline'));
const DEFAULT_INDENT = '  ';
const DEFAULT_NEWLINE = '\n';
/**
 * Parse and validate the manifest file, and return it as typed object.
 */
function parse (contents) {
  let manifest;
  try {
    manifest = json_file_1.default.parseJsonString(contents, { json5: true });
  }
  catch (_a) {
    manifest = null;
  }
  if (manifest === null || typeof manifest !== 'object') {
    throw new Error('Manifest must include a JSON object.');
  }
  if (manifest.expo === null || typeof manifest.expo !== 'object') {
    throw new Error('Property \'expo\' in manifest is not an object.');
  }
  return manifest;
}

exports.parse = parse;
/**
 * Serialize the manifest content back to string.
 * This also accepts the raw content to detect the indentation and/or newline.
 */
function serialize (manifest, raw = '') {
  const indent = detect_indent_1.default(raw).indent || DEFAULT_INDENT;
  const newline = detect_newline_1.default(raw) || DEFAULT_NEWLINE;
  const json = JSON.stringify(manifest, null, indent);
  return json.replace(/\n/g, newline) + newline;
}

exports.serialize = serialize;
