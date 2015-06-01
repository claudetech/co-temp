# [temp](https://github.com/bruce/node-temp) thunk wrappers for [co](https://github.com/tj/co)
[![Build Status](https://travis-ci.org/claudetech/co-temp.svg)](https://travis-ci.org/claudetech/co-temp)

## Installation

```sh
$ npm install co-temp
```

## Usage

```javascript
var temp = require('co-temp').track();

co(function *() {
    var info = yield temp.open('file');
    console.log(info.path);
    var dirPath = yield temp.mkdir('mydir');
    console.log(info.path);

    yield temp.cleanup(); // only if you use track()
});
```

See [temp](https://github.com/bruce/node-temp) documentation for more info.
