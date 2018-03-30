"use strict";

module.exports = {
  "extends": [
    "formidable/rules/eslint/best-practices/off",
    "formidable/rules/eslint/errors/off",
    "formidable/rules/eslint/es6/off",
    "formidable/rules/eslint/node/off",
    "formidable/rules/eslint/strict/off",
    "formidable/rules/eslint/style/off",
    "formidable/rules/eslint/variables/off",
    "formidable/rules/filenames/off",
    "formidable/rules/import/off",
    "formidable/rules/promise/off"
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: {}
  },
  env: {},
  globals: {},
  rules: {}
};
