"use strict";

module.exports = {
  plugins: [
    "filenames"
  ],
  rules: {
    // Enforce dash-cased filenames
    "filenames/match-regex": "off",
    // Match the file name against the default exported value in the module
    "filenames/match-exported": "off",
    // Don't allow index.js files
    "filenames/no-index": "off"
  }
};
