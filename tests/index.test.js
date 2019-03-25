const fs = require('fs');
const util = require('util');
const rimraf = require('rimraf');
const save = require('../index.js');

global.console.log = jest.fn();

beforeAll(async () => {
  await util.promisify(rimraf)('output/*');
});

it('saves to file with default options', async () => {
  const object = { yolo: true };
  const content = await doIt('output/default.json', object);
  expect(content).toEqual('{"yolo":true}');
  expect(global.console.log).toHaveBeenCalledWith(
    expect.stringMatching(/saved.*13 B/)
  );
});

it('saves to file with pretty formatting', async () => {
  const object = { yolo: true };
  const content = await doIt('output/pretty.json', object, { pretty: true });
  expect(content).toEqual('{\n  "yolo": true\n}');
  expect(global.console.log).toHaveBeenCalledWith(
    expect.stringMatching(/saved.*13 B/)
  );
});

async function doIt(filename, object, options) {
  await save(filename, object, options);
  const content = await util.promisify(fs.readFile)(filename);
  return content.toString();
}
