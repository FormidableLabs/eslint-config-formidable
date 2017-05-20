"use strict";

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    "array-bracket-spacing": ["error", "never"],
    // disallow or enforce spaces inside of single line blocks
    "block-spacing": ["error", "always"],
    // enforce one true brace style
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    // require camel case names
    camelcase: "error",
    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": "off",
    // disallow trailing commas in object literals
    "comma-dangle": ["error", "never"],
    // enforce spacing before and after comma
    "comma-spacing": "error",
    // enforce one true comma style
    "comma-style": ["error", "last"],
    // require or disallow padding inside computed properties
    "computed-property-spacing": ["off", "never"],
    // enforces consistent naming when capturing the current execution context
    "consistent-this": ["error", "self"],
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": "error",
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": ["error", "never"],
    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": "off",
    // require function expressions to have a name
    "func-names": "off",
    // enforces use of function declarations or expressions
    "func-style": ["error", "expression"],
    // disallow certain identifiers to prevent them being used
    "id-blacklist": "off",
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    "id-length": "off",
    // require identifiers to match the provided regular expression
    "id-match": "off",
    // this option sets a specific tab width for your code
    indent: ["error", 2],
    // specify whether double or single quotes should be used in JSX attributes
    "jsx-quotes": ["error", "prefer-double"],
    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["error", { beforeColon: false,
      afterColon: true }],
    // enforce spacing before and after keywords
    "keyword-spacing": ["error", { before: true,
      after: true }],
    // enforce position of line comments
    "line-comment-position": "off",
    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": ["off", "unix"],
    // enforces empty lines around comments
    "lines-around-comment": "off",
    // require or disallow newlines around directives
    "lines-around-directive": ["error", "always"],
    // specify the maximum depth that blocks can be nested
    "max-depth": ["error", 4],
    // specify the maximum length of a line in your program
    "max-len": ["error", 100, 2, { ignoreUrls: true,
      ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(" }],
    // enforce a maximum number of lines per file
    "max-lines": "off",
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": ["error", 3],
    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["error", 3],
    // specify the maximum number of statement allowed in a function
    "max-statements": ["error", 15],
    // specify the maximum number of statements allowed per line
    "max-statements-per-line": "off",
    // enforce newlines between operands of ternary expressions
    "multiline-ternary": "off",
    // require a capital letter for constructors
    "new-cap": "error",
    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": "error",
    // allow/disallow an empty newline after var statement
    "newline-after-var": "off",
    // require newline before return statement
    "newline-before-return": "off",
    // enforce newline after each call when chaining the calls
    "newline-per-chained-call": "off",
    // disallow use of the Array constructor
    "no-array-constructor": "error",
    // disallow use of bitwise operators
    "no-bitwise": "error",
    // disallow use of the continue statement
    "no-continue": "off",
    // disallow comments inline after code
    "no-inline-comments": "off",
    // disallow if as the only statement in an else block
    "no-lonely-if": "error",
    // disallow mixed binary operators
    "no-mixed-operators": "off",
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "error",
    // disallow use of chained assignment expressions
    "no-multi-assign": "off",
    // disallow multiple empty lines
    "no-multiple-empty-lines": ["error", { max: 2 }],
    // disallow negated conditions
    "no-negated-condition": "off",
    // disallow nested ternary expressions
    "no-nested-ternary": "error",
    // disallow use of the Object constructor
    "no-new-object": "error",
    // disallow use of unary operators, ++ and --
    "no-plusplus": "off",
    // disallow use of certain syntax in code
    "no-restricted-syntax": "off",
    // disallow all tabs
    "no-tabs": "off",
    // disallow the use of ternary operators
    "no-ternary": "off",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "error",
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",
    // disallow the use of Boolean literals in conditional expressions
    "no-unneeded-ternary": "error",
    // disallow whitespace before properties
    "no-whitespace-before-property": "error",
    // enforce the location of single-line statements
    "nonblock-statement-body-position": ["error", "below"],
    // enforce consistent line breaks inside braces
    "object-curly-newline": "off",
    // require or disallow padding inside curly braces
    "object-curly-spacing": ["error", "always"],
    // enforce placing object properties on separate lines
    "object-property-newline": "error",
    // allow just one var statement per function
    "one-var": ["error", "never"],
    // require or disallow an newline around variable declarations
    "one-var-declaration-per-line": ["error", "initializations"],
    // require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": ["error", "always"],
    // enforce operators to be placed before or after line breaks
    "operator-linebreak": ["error", "before"],
    // enforce padding within blocks
    "padded-blocks": ["error", "never"],
    // require quotes around object literal property names
    "quote-props": ["error", "as-needed", { keywords: true,
      numbers: true }],
    // specify whether double or single quotes should be used
    quotes: ["error", "double"],
    // Require JSDoc comment
    "require-jsdoc": "off",
    // require or disallow use of semicolons instead of ASI
    semi: "error",
    // enforce spacing before and after semicolons
    "semi-spacing": ["error", { before: false,
      after: true }],
    // require object keys to be sorted
    "sort-keys": "off",
    // sort variables within the same declaration block
    "sort-vars": "off",
    // require or disallow space before blocks
    "space-before-blocks": ["error", "always"],
    // require or disallow space before function opening parenthesis
    "space-before-function-paren": ["error", { anonymous: "always",
      named: "never" }],
    // require or disallow spaces inside parentheses
    "space-in-parens": ["error", "never"],
    // require spaces around operators
    "space-infix-ops": "error",
    // Require or disallow spaces before/after unary operators
    "space-unary-ops": ["error", { words: true,
      nonwords: false }],
    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": ["error", "always", { exceptions: ["-", "=", "*"] }],
    // require or disallow spacing between template tags and their literals
    "template-tag-spacing": ["error", "always"],
    // require or disallow Unicode byte order mark (BOM)
    "unicode-bom": "off",
    // require regex literals to be wrapped in parentheses
    "wrap-regex": "error"
  }
};
