Save a JS object to file and output its file size

## Usage

```js
const save = require('@piuccio/json-to-file');

await save('filepath.json', {
  myObject: '...',
});
```

It'll create a file called `filepath.json` and `console.log` the generated file size in human readable way

### Options

`save(filename, content, options)`

The third optional argument is an options object containing

* `pretty: Boolean` defaults to `false`, if `true` the generated JSON file will have indentation of 2 spaces.
* `cwd: String` defaults to `undefined`, it set, all paths will be prefixed with `cwd`
