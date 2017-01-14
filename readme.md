# imagemin-guetzli [![Build Status](https://travis-ci.org/imagemin/imagemin-guetzli.svg?branch=master)](https://travis-ci.org/imagemin/imagemin-guetzli) [![Build status](https://ci.appveyor.com/api/projects/status/suwf97d2503uyoao?svg=true)](https://ci.appveyor.com/project/1000ch/imagemin-guetzli)

> guetzli imagemin plugin


## Install

```
$ npm install --save imagemin-guetzli
```


## Usage

```js
const imagemin = require('imagemin');
const imageminGuetzli = require('imagemin-guetzli');

imagemin(['images/*.jpg'], 'build/images', {use: [imageminGuetzli()]}).then(() => {
  console.log('Images optimized');
});
```


## API

### imageminGuetzli([options])(buffer)

Returns a promise for a buffer.

#### options

##### quality

Type: `number`<br>
Default: `95`

Visual quality to aim for, expressed as a JPEG quality value.

##### verbose

Type: `boolean`<br>
Default: `true`

Print a verbose trace of all attempts to standard output.


## License

MIT © [imagemin](https://github.com/imagemin)
