"use strict";

module.exports = {
  "extends": [
    "formidable/configurations/es6-react"
  ],
  env: {
    mocha: true,
    jest: true,
    phantomjs: true
  },
  globals: {
    expect: true,
    sandbox: true
  },
  rules: {
    "max-nested-callbacks": "off",
    "no-unused-expressions": "off"
  }
};
