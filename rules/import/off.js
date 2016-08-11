"use strict";

module.exports = {
  "plugins": [
    "import"
  ],
  "rules": {
    // Ensure imports point to a file/module that can be resolved
    "import/no-unresolved": 0,
    // Ensure a default export is present, given a default import
    "import/default": 0,
    // Report any invalid exports, i.e. re-export of the same name
    "import/export": 0,
    // Forbid the use of extraneous packages
    "import/no-extraneous-dependencies": 0,
    // Forbid the use of mutable exports with var or let
    "import/no-mutable-exports": 0,
    // Ensure all imports appear before other statements
    "import/imports-first": 0,
    // Report repeated import of the same module in multiple places
    "import/no-duplicates": 0
  }
};
