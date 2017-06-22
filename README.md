# less-plugin-remcalc

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

Simply adds `rem-base` and `rem-calc` functions to LESS.

[![NPM](https://nodei.co/npm/less-plugin-remcalc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/less-plugin-remcalc/)

## Installation

```
yarn add --dev less-plugin-remcalc
```

## Usage

### lessc

On the command line:

```
lessc file.less --remcalc
```

### node

```js
var remcalc = require('less-plugin-remcalc');

less.render(data, { plugins: [remcalc] }).then(...);
```

### grunt (grunt-contrib-less)

Register the plugin in your `Gruntfile.js`:

```js
less: {
    options: {
        plugins: [
            require('less-plugin-remcalc')
        ]
    }
}
```

### webpack (less-loader)

```js
var RemcalcPlugin = require('less-plugin-remcalc');

module.exports = {
  ...
  lessLoader: {
    lessPlugins: [
      RemcalcPlugin
    ]
  }
};
```

## Examples

### Basic

```less
.card {
  min-width: rem-calc(64px);
}

.card {
  min-width: rem-calc(64);
}
```

### Overriding the rem base

Default base is `16px` but you can override it at any time (here with `12px`):

```less
.card {
  padding: rem-calc(20px, 12px);
}
```

You can also act globally on the rem base, using:

```less
@rem-base: rem-base(10px); // will globally override the rem base.

.card {
  min-width: rem-calc(20px); // is now equivalent to rem-calc(20px, 10px);
}
```
