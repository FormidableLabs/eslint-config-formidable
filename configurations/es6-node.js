"use strict";

module.exports = {
  "extends": [
    "formidable/configurations/es6",
    "formidable/rules/eslint/node/on"
  ],
  env: {
    node: true
  },
  parserOptions: {
    sourceType: "script",
    ecmaFeatures: {
      impliedStrict: false
    }
  },
  globals: {},
  rules: {
    // verify super() callings in constructors
    "constructor-super": "off",
    // disallow modifying variables of class declarations
    "no-class-assign": "off",
    // disallow modifying variables that are declared using const
    "no-dupe-class-members": "off",
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": "off",
    // require that all functions are run in strict mode
    strict: ["error", "global"]
  }
};
