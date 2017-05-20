"use strict";

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    "init-declarations": "off",
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": "error",
    // disallow deletion of variables
    "no-delete-var": "error",
    // disallow labels that share a name with a variable
    "no-label-var": "error",
    // restrict usage of specified global variables
    "no-restricted-globals": "off",
    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",
    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "error",
    // disallow use of undefined when initializing variables
    "no-undef-init": "error",
    // disallow use of undefined variable
    "no-undefined": "off",
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": ["error", { vars: "all",
      args: "after-used" }],
    // disallow use of variables before they are defined
    "no-use-before-define": "error"
  }
};
