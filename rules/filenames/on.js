"use strict";

module.exports = {
  plugins: [
    "filenames"
  ],
  rules: {
    // Enforce dash-cased filenames
    // `true` here means "don't enforce if `export default` exists in file"
    "filenames/match-regex": ["error", "^[a-z0-9\\-\\.]+$", false],
    // Match the file name against the default exported value in the module
    // Should set to `"error"` if last parameter above is `true`.
    "filenames/match-exported": "off",
    // Don't allow index.js files
    "filenames/no-index": "off"
  }
};
