"use strict";

module.exports = {
  rules: {
    // require braces in arrow function body
    "arrow-body-style": "off",
    // require parens in arrow function arguments
    "arrow-parens": "off",
    // require space before/after arrow function's arrow
    "arrow-spacing": "off",
    // verify super() callings in constructors
    "constructor-super": "off",
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": "off",
    // disallow modifying variables of class declarations
    "no-class-assign": "off",
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": "off",
    // disallow modifying variables that are declared using const
    "no-const-assign": "off",
    // disallow duplicate name in class members
    "no-dupe-class-members": "off",
    // disallow duplicate module imports
    "no-duplicate-imports": "off",
    // disallow use of the new operator with the Symbol object
    "no-new-symbol": "off",
    // restrict usage of specified modules when loaded by import declaration
    "no-restricted-imports": "off",
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": "off",
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "off",
    // disallow unnecessary constructor
    "no-useless-constructor": "off",
    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "off",
    // require let or const instead of var
    "no-var": "off",
    // require method and property shorthand syntax for object literals
    "object-shorthand": "off",
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": "off",
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": "off",
    // require destructuring from arrays and/or objects
    "prefer-destructuring": "off",
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "off",
    // suggest using the rest parameters instead of arguments
    "prefer-rest-params": "off",
    // suggest using the spread operator instead of .apply()
    "prefer-spread": "off",
    // suggest using template literals instead of strings concatenation
    "prefer-template": "off",
    // disallow generator functions that do not have yield
    "require-yield": "off",
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": "off",
    // enforce sorted import declarations within modules
    "sort-imports": "off",
    // require symbol descriptions
    "symbol-description": "off",
    // enforce spacing around embedded expressions of template strings
    "template-curly-spacing": "off",
    // enforce spacing around the * in yield* expressions
    "yield-star-spacing": "off"
  }
};
