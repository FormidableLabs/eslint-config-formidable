"use strict";

module.exports = {
  "extends": [
    "formidable/configurations/es5",
    "formidable/rules/eslint/node/on"
  ],
  env: {
    node: true
  },
  rules: {
    strict: ["error", "global"]
  }
};
