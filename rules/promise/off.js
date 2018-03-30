"use strict";

module.exports = {
  plugins: [
    "promise"
  ],
  rules: {
    // Return inside each then() to create readable and reusable Promise chains.
    "promise/always-return": "off",
    // Avoid creating new promises outside of utility libs (use pify instead)
    "promise/avoid-new": "off",
    // Enforces the use of catch() on un-returned promises.
    "promise/catch-or-return": "off",
    // Avoid calling cb() inside of a then() (use nodeify instead)
    "promise/no-callback-in-promise": "off",
    // In an ES5 environment, make sure to create a Promise constructor before using.
    "promise/no-native": "off",
    // Avoid nested then() or catch() statements
    "promise/no-nesting": "off",
    // Avoid using promises inside of callbacks
    "promise/no-promise-in-callback": "off",
    // Avoid wrapping values in Promise.resolve or Promise.reject when not needed.
    "promise/no-return-wrap": "off",
    // Enforce consistent param names when creating new promises.
    "promise/param-names": "off"
  }
};
