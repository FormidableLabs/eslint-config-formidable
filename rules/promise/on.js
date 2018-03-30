"use strict";

module.exports = {
  plugins: [
    "promise"
  ],
  rules: {
    // Return inside each then() to create readable and reusable Promise chains.
    "promise/always-return": "error",
    // Avoid creating new promises outside of utility libs (use pify instead)
    "promise/avoid-new": "error",
    // Enforces the use of catch() on un-returned promises.
    "promise/catch-or-return": "error",
    // Avoid calling cb() inside of a then() (use nodeify instead)
    "promise/no-callback-in-promise": "error",
    // In an ES5 environment, make sure to create a Promise constructor before using.
    "promise/no-native": "off",
    // Avoid nested then() or catch() statements
    "promise/no-nesting": "error",
    // Avoid using promises inside of callbacks
    "promise/no-promise-in-callback": "error",
    // Avoid wrapping values in Promise.resolve or Promise.reject when not needed.
    "promise/no-return-wrap": "error",
    // Enforce consistent param names when creating new promises.
    "promise/param-names": "error"
  }
};
