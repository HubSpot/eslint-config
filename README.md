# eslint-config-hubspot

# This repo is archived in favor of an internal ESLint config

[![npm version](https://badge.fury.io/js/eslint-config-hubspot.svg)](https://badge.fury.io/js/eslint-config-hubspot)

> HubSpot's ESLint [configurations](http://eslint.org/docs/developer-guide/shareable-configs.html)


## Install

```
// npm
$ npm install --save-dev eslint eslint-config-hubspot eslint-plugin-react

// yarn
$ yarn add eslint eslint-config-hubspot eslint-plugin-react --dev
```

For the `esnext` version or if you are using newer syntax, you'll also need Babel's ESLint [parser](https://github.com/babel/babel-eslint):

```
//npm
$ npm install --save-dev babel-eslint

// yarn
$ yarn add babel-eslint --dev
```

This will let you use ES2016 features like [`async`/`await`](https://github.com/lukehoban/ecmascript-asyncawait) and [decorators](https://github.com/wycats/javascript-decorators). For a full list of features see [Babel's experimental features](https://babeljs.io/docs/usage/experimental/) and their [Learn ES2015](https://babeljs.io/docs/learn-es2015/).


## Usage

Add ESLint configurations to your `package.json`:

```js
{
  "eslintConfig": {
    "extends": "hubspot" // or "hubspot/esnext"
  }
}
```

Or `.eslintrc*`:

```js
{
  "extends": "hubspot" // or "hubspot/esnext"
}
```

## License

MIT &copy; [HubSpot](https://github.com/hubspot)
