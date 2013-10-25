# Require-HB

Require.js plugin for the handlebars template parser.

## Requirements

* [Require.js](https://github.com/jrburke/requirejs)
* [Underscore](https://github.com/jashkenas/underscore)
* [Handlebars] (https://github.com/wycats/handlebars.js)

## Installation

Use the volo dependency manager by adding this repository to the dependency list.

## Usage

```javascript
require.config({
    baseUrl: 'js',
    paths: {
        Underscore: 'libs/underscore',
        Handlebars: 'libs/handlebars',
        hb: 'libs/require-plugins/hb'
    },
    shim: {
        Underscore: {
            deps: [],
            exports: '_'
        },
        Handlebars: {
            deps: [],
            exports: 'Handlebars'
        },
        hb: {
            deps: ['Handlebars']
        }
    },
    hb: {
        location: 'templates',
        extension: 'hbs'
    }
});

require(['hb!index'], function (index) {
    'use strict';
    window.document.body.innerHTML = index({foo: 'bar'});
});
```

## Configuration

The configuration of the hb plugin is not required. There is a default value for both options.

* `location` - defaults to an empty string
* `extension` - defaults to html
