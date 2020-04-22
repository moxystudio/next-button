# next-button

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/next-button
[downloads-image]:https://img.shields.io/npm/dm/@moxy/next-button.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/next-button.svg
[build-status-url]:https://github.com/moxystudio/next-button/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/next-button/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/next-button
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/next-button/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/next-button
[david-dm-image]:https://img.shields.io/david/moxystudio/next-button.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/next-button?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/next-button.svg

A react button that doubles down as a link.

## Installation

```sh
$ npm install @moxy/next-button
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

Every website or app needs a button, so this is our bare-bones version of it. In addition, it doubles down as a [NextLink](https://github.com/moxystudio/next-link) if an `href` prop is passed, maintaining the style of a button.

## Usage

```js
import React from 'react';
import NextButton from '@moxy/next-button';

const MyPage = (props) => (
    <div className="container">
        <NextButton>Button 1</NextButton>
        <NextButton href="/about">Button 2</NextButton>
    </div>
);

export default MyPage;
```

Import the stylesheet in the project's entry JavaScript file:

```js
import '@moxy/next-button/dist/index.css';
```

## API

Besides the following supported props by the `NextButton` component, additional props are spread.

#### children

Type: `node` | Required: `true`

What to render inside the component.

#### onClick

Type: `func` | Required: `false`

The onClick event handler.

#### href

Type: `string` | Required: `false`

If this prop is passed, a [NextLink](https://github.com/moxystudio/next-link) will be rendered, maintaining the style of a button. Check out its [API](https://github.com/moxystudio/next-link#api) to check available props.

#### className

Type: `string` | Required: `false`

A className to apply to the component wrapper.

## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## Demo

A demo [Next.js](https://nextjs.org/) project is available in the [`/demo`](./demo) folder so you can try this component out.

First, build the `next-button` project with:

```sh
$ npm run build
```

To run the demo, do the following inside the demo's folder:

```sh
$ npm i
$ npm run dev
```

*Note: Everytime a change is made to the package a rebuild is required to reflect those changes on the demo.*

## FAQ

### I can't override the component's CSS, what's happening?

There is an ongoing [next.js issue](https://github.com/zeit/next.js/issues/10148) about the loading order of modules and global CSS in development mode. This has been fixed in [v9.3.6-canary.0](https://github.com/zeit/next.js/releases/tag/v9.3.6-canary.0), so you can either update `next.js` to a version higher than `v9.3.5`, or simply increase the CSS specificity when overriding component's classes, as we did in the [`demo`](./demo/pages/index.module.css), e.g. having the page or section CSS wrap the component's one.

## License

Released under the [MIT License](./LICENSE).
