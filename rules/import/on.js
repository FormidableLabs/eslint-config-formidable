"use strict";

module.exports = {
  plugins: [
    "import"
  ],
  rules: {
    // Ensure imports point to a file/module that can be resolved
    "import/no-unresolved": ["error", { commonjs: true }],
    // Ensure named imports correspond to a named export in the remote file
    "import/named": "off",
    // Ensure a default export is present, given a default import
    "import/default": "off",
    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    "import/namespace": "off",
    // Restrict which files can be imported in a given folder
    "import/no-restricted-paths": "off",
    // Report any invalid exports, i.e. re-export of the same name
    "import/export": "error",
    // Report use of exported name as identifier of default export
    "import/no-named-as-default": "off",
    // Report use of exported name as property of default export
    "import/no-named-as-default-member": "off",
    // Report imported names marked with @deprecated documentation tag
    "import/no-deprecated": "off",
    // Forbid the use of extraneous packages
    "import/no-extraneous-dependencies": "off",
    // Forbid the use of mutable exports with var or let
    "import/no-mutable-exports": "error",
    // Report CommonJS require calls and module.exports or exports.*
    "import/no-commonjs": "off",
    // Report AMD require and define calls.
    "import/no-amd": "off",
    // No Node.js builtin modules
    "import/no-nodejs-modules": "off",
    // Ensure all imports appear before other statements
    "import/imports-first": "error",
    // Report repeated import of the same module in multiple places
    "import/no-duplicates": "error",
    // Report namespace imports
    "import/no-namespace": "off",
    // Ensure consistent use of file extension within the import path
    "import/extensions": "off",
    // Enforce a convention in module import order
    "import/order": "off",
    // Enforce a newline after import statements
    "import/newline-after-import": "off",
    // Prefer a default export if module exports a single name
    "import/prefer-default-export": "off"
  }
};
