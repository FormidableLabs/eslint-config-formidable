"use strict";

module.exports = {
  rules: {
    // require braces in arrow function body
    "arrow-body-style": ["error", "as-needed"],
    // require parens in arrow function arguments
    "arrow-parens": "error",
    // require space before/after arrow function's arrow
    "arrow-spacing": "error",
    // verify super() callings in constructors
    "constructor-super": "error",
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": "error",
    // disallow modifying variables of class declarations
    "no-class-assign": "error",
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": "off",
    // disallow modifying variables that are declared using const
    "no-const-assign": "error",
    // disallow duplicate name in class members
    "no-dupe-class-members": "error",
    // disallow duplicate module imports
    "no-duplicate-imports": "off",
    // disallow use of the new operator with the Symbol object
    "no-new-symbol": "off",
    // restrict usage of specified modules when loaded by import declaration
    "no-restricted-imports": "off",
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": "error",
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "error",
    // disallow unnecessary constructor
    "no-useless-constructor": "off",
    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "error",
    // require let or const instead of var
    "no-var": "error",
    // require method and property shorthand syntax for object literals
    "object-shorthand": "error",
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": "warn",
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": "error",
    // require destructuring from arrays and/or objects
    "prefer-destructuring": "off",
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "error",
    // suggest using the rest parameters instead of arguments
    "prefer-rest-params": "off",
    // suggest using the spread operator instead of .apply()
    "prefer-spread": "error",
    // suggest using template literals instead of strings concatenation
    "prefer-template": "warn",
    // disallow generator functions that do not have yield
    "require-yield": "error",
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": "error",
    // enforce sorted import declarations within modules
    "sort-imports": "off",
    // require symbol descriptions
    "symbol-description": "off",
    // enforce spacing around embedded expressions of template strings
    "template-curly-spacing": "error",
    // enforce spacing around the * in yield* expressions
    "yield-star-spacing": ["error", "after"]
  }
};
