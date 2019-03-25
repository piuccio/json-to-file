const fs = require('fs');
const util = require('util');
const path = require('path');
const pretty = require('prettysize');
const writeFile = util.promisify(fs.writeFile);
const stat = util.promisify(fs.stat);

module.exports = async function (filename, content, options = {}) {
  const fullPath = path.join(options.cwd || '', filename);
  await writeFile(
    fullPath,
    JSON.stringify(content, null, options.pretty ? 2 : undefined),
  );
  const { size } = await stat(fullPath);
  // eslint-disable-next-line no-console
  console.log(`File saved [${path.basename(fullPath)}]: ${pretty(size)}`);
};
