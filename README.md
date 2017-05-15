# eslint-config-formidable
======================
#### A composable set of ESLint configurations.
[![Build Status](https://travis-ci.org/FormidableLabs/eslint-config-formidable.svg?branch=master)](https://travis-ci.org/FormidableLabs/eslint-config-formidable)
[![npm](https://img.shields.io/npm/v/eslint-config-formidable.svg?maxAge=2592000)](https://www.npmjs.com/package/eslint-config-formidable)

This project is based on [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart). It is `eslint@2+`-compatible and maintained by Formidable.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint@2.10.2 eslint-config-formidable
```

## Usage

### Full Configurations

This package includes the following complete and ready to use configurations:

- `formidable` - ES6 config
- `formidable/configurations/off` - Disable all rules (ESLint's default at 1.0.0+)
- `formidable/configurations/es5-browser` - ES5 + browser
- `formidable/configurations/es5-node` - ES5 + node < 4.x
- `formidable/configurations/es5-test` - ES5 + test
- `formidable/configurations/es5` - ES5 config
- `formidable/configurations/es6-browser` - ES6 + browser
- `formidable/configurations/es6-node` - ES6 + node 4.x
- `formidable/configurations/es6-react-test` - ES6 + react + test
- `formidable/configurations/es6-react` - ES6 + react
- `formidable/configurations/es6-test` - ES6 + test
- `formidable/configurations/es6` - ES6 config

###### Dependencies

- Any config (`formidable/configurations/<suffix>`)
  - [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- Any React config (`<prefix>-react`)
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - [babel-eslint](https://github.com/babel/babel-eslint)
- Any ES-next config (`es6-<suffix>`)
  - [babel-eslint](https://github.com/babel/babel-eslint)

To consume and extend a config in ESLint just add the extends attribute to your `.eslintrc`. For
more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

```yaml
---
"extends":
  - "formidable"
```

```yaml
---
"extends":
  - "formidable/configurations/es6-browser"
```

### Piecemeal Configurations

ESLint configuration is broken apart in `./rules` containing ESLint's rules and rules for specific ESLint plugins. The full set of ESLint rules (`./rules/eslint`) are broken into categories that mirror ESLint's documentation. Under each rule type there are sets of configuration as well as an `off.js` file which turns off every rule in the category.

###### Examples

```yaml
---
"extends":
  - "formidable/rules/eslint/best-practices/on",
  - "formidable/rules/eslint/es6/off"
  - "formidable/rules/eslint/node/off"

"env":
  "phantom": true
```

## Limitations

Due to an issue with ESLint, config extension cannot be called from a globally installed (`npm install -g eslint`) eslint. It can however be run properly using eslint installed directly to your package's `node_modules`. This can be done by either calling it directly (`./node_modules/.bin/eslint .`) or from within an npm script since they automatically check local `node_modules` first. This will be tracked in issue [#43](https://github.com/walmartlabs/eslint-config-defaults/issues/43).

### This package tracks config in the following versions:

- [ESLint](https://github.com/eslint/eslint) 3.19.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 6.0.0
- [eslint-plugin-filenames](https://www.npmjs.com/package/eslint-plugin-filenames) 1.1.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 1.13.0

## Contributing

This project defines a huge number of very contentious config variables. In order to prevent issues/PRs from being eternal bikeshedding pits of doom we would like to ask that you *simply upvote or downvote a rule. If you need to explain something please use concrete and reproducible evidence or statistics.* Please try not to post assertions of preference, authority, aesthetic beauty (it's in the eye of the beholder), minimal key presses, cognitive load or any other subjective measures of code style.

## And A Special Thanks To

* [Nicholas C. Zakas](https://github.com/nzakas) for all the amazing work on [ESLint](https://github.com/eslint/eslint)
* [Keith Cirkel](https://github.com/keithamus) for painstakingly formatting all of ESLint's rules into JSON in [eslint-config-strict](https://github.com/keithamus/eslint-config-strict)
* [AirBnB](https://github.com/airbnb/javascript) for sharing all of their config in [JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Google](https://google.github.io/styleguide/javascriptguide.xml) for sharing their styleguide
* [ES-Next Compat Table](https://github.com/kangax/compat-table) for the [excellent docs on node features](https://kangax.github.io/compat-table/es6/#node4)

***

## License

[MIT License](http://opensource.org/licenses/MIT)
