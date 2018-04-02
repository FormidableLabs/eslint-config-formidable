"use strict";

module.exports = {
  "extends": [
    "formidable/rules/eslint/best-practices/on",
    "formidable/rules/eslint/errors/on",
    "formidable/rules/eslint/es6/off",
    "formidable/rules/eslint/node/off",
    "formidable/rules/eslint/strict/on",
    "formidable/rules/eslint/style/on",
    "formidable/rules/eslint/variables/on",
    "formidable/rules/filenames/on",
    "formidable/rules/import/on",
    "formidable/rules/promise/on"
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: {}
  },
  env: {
    amd: true
  },
  globals: {
    module: false,
    process: false
  },
  rules: {}
};
