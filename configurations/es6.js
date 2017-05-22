"use strict";

module.exports = {
  "extends": [
    "formidable/configurations/es5",
    "formidable/rules/eslint/es6/on"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },
  env: {
    es6: true
  },
  globals: {},
  rules: {}
};
