"use strict";

module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    "accessor-pairs": "off",
    // enforce return statements in callbacks of array’s methods
    "array-callback-return": "off",
    // treat var statements as if they were block scoped
    "block-scoped-var": "off",
    // enforce that class methods utilize this
    "class-methods-use-this": "off",
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: "off",
    // require return statements to either always or never specify values
    "consistent-return": "off",
    // specify curly brace conventions for all control statements
    curly: "off",
    // require default case in switch statements
    "default-case": "off",
    // enforces consistent newlines before or after dots
    "dot-location": "off",
    // encourages use of dot notation whenever possible
    "dot-notation": "off",
    // require the use of === and !==
    eqeqeq: "off",
    // make sure for-in loops have an if statement
    "guard-for-in": "off",
    // disallow the use of alert, confirm, and prompt
    "no-alert": "off",
    // disallow use of arguments.caller or arguments.callee
    "no-caller": "off",
    // disallow lexical declarations in case clauses
    "no-case-declarations": "off",
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": "off",
    // disallow else after a return in an if
    "no-else-return": "off",
    // disallow use of empty functions
    "no-empty-function": "off",
    // disallow use of empty destructuring patterns
    "no-empty-pattern": "off",
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": "off",
    // disallow use of eval()
    "no-eval": "off",
    // disallow adding to native types
    "no-extend-native": "off",
    // disallow unnecessary function binding
    "no-extra-bind": "off",
    // disallow unnecessary labels
    "no-extra-label": "off",
    // disallow fallthrough of case statements
    "no-fallthrough": "off",
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": "off",
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "off",
    // disallow the type conversions with shorter notations
    "no-implicit-coercion": "off",
    // disallow var and named functions in global scope
    "no-implicit-globals": "off",
    // disallow use of eval()-like methods
    "no-implied-eval": "off",
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "off",
    // disallow usage of __iterator__ property
    "no-iterator": "off",
    // disallow use of labeled statements
    "no-labels": "off",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "off",
    // disallow creation of functions within loops
    "no-loop-func": "off",
    // disallow the use of magic numbers
    "no-magic-numbers": "off",
    // disallow use of multiple spaces
    "no-multi-spaces": "off",
    // disallow use of multiline strings
    "no-multi-str": "off",
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": "off",
    // disallow use of new operator for Function object
    "no-new-func": "off",
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": "off",
    // disallow use of (old style) octal literals
    "no-octal": "off",
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": "off",
    // disallow reassignment of function parameters
    "no-param-reassign": "off",
    // disallow usage of __proto__ property
    "no-proto": "off",
    // disallow declaring the same variable more then once
    "no-redeclare": "off",
    // disallow certain properties on certain objects
    "no-restricted-properties": "off",
    // disallow use of assignment in return statement
    "no-return-assign": "off",
    // disallow unnecessary return await
    "no-return-await": "off",
    // disallow use of `javascript:` urls.
    "no-script-url": "off",
    // disallow assignments where both sides are exactly the same
    "no-self-assign": "off",
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "off",
    // disallow use of comma operator
    "no-sequences": "off",
    // restrict what can be thrown as an exception
    "no-throw-literal": "off",
    // disallow unmodified conditions of loops
    "no-unmodified-loop-condition": "off",
    // disallow usage of expressions in statement position
    "no-unused-expressions": "off",
    // disallow unused labels
    "no-unused-labels": "off",
    // disallow unnecessary .call() and .apply()
    "no-useless-call": "off",
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "off",
    // disallow unnecessary usage of escape character
    "no-useless-escape": "off",
    // disallow redundant return statements
    "no-useless-return": "off",
    // disallow use of void operator
    "no-void": "off",
    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": "off",
    // disallow use of the with statement
    "no-with": "off",
    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": "off",
    // require use of the second argument for parseInt()
    radix: "off",
    // disallow async functions which have no await expression
    "require-await": "off",
    // requires to declare all vars on top of their containing scope
    "vars-on-top": "off",
    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": "off",
    // require or disallow Yoda conditions
    yoda: "off"
  }
};
