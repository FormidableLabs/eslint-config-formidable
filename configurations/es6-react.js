"use strict";

module.exports = {
  parser: "babel-eslint",
  "extends": [
    "formidable/configurations/es6-browser",
    "formidable/rules/react/on"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    fetch: false
  },
  rules: {
    "no-extra-parens": "off",
    "no-var": "error"
  }
};
