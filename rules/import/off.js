"use strict";

module.exports = {
  "plugins": [
    "import"
  ],
  "rules": {
    // Ensure imports point to a file/module that can be resolved
    "import/no-unresolved": 0,
    //Ensure named imports correspond to a named export in the remote file
    "import/named": 0,
    // Ensure a default export is present, given a default import
    "import/default": 0,
    //Ensure imported namespaces contain dereferenced properties as they are dereferenced
    "import/namespace": 0,
    //Restrict which files can be imported in a given folder
    "import/no-restricted-paths": 0,
    // Report any invalid exports, i.e. re-export of the same name
    "import/export": 0,
    //Report use of exported name as identifier of default export
    "import/no-named-as-default": 0,
    //Report use of exported name as property of default export
    "import/no-named-as-default-member": 0,
    //Report imported names marked with @deprecated documentation tag
    "import/no-deprecated": 0,
    // Forbid the use of extraneous packages
    "import/no-extraneous-dependencies": 0,
    // Forbid the use of mutable exports with var or let
    "import/no-mutable-exports": 0,
    //Report CommonJS require calls and module.exports or exports.*
    "import/no-commonjs": 0,
    //Report AMD require and define calls.
    "import/no-amd": 0,
    //No Node.js builtin modules
    "import/no-nodejs-modules": 0,
    // Ensure all imports appear before other statements
    "import/imports-first": 0,
    // Report repeated import of the same module in multiple places
    "import/no-duplicates": 0,
    //Report namespace imports
    "import/no-namespace": 0,
    //Ensure consistent use of file extension within the import path
    "import/extensions": 0,
    //Enforce a convention in module import order
    "import/order": 0,
    //Enforce a newline after import statements
    "import/newline-after-import": 0,
    //Prefer a default export if module exports a single name
    "import/prefer-default-export": 0
  }
};
