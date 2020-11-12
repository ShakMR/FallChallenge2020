const fs = require('fs');
const file = process.argv[2];

const content = fs.readFileSync(file, 'UTF-8').split(/\n/);
let index = 0;
global.readline = () => {
  const ret = content[index++];
  if (!ret) {
    throw 'EOF';
  }
  return ret;
};

try {
  require('../dist/main.js');
} catch (err) {
  if (err === 'EOF') {
    return;
  }
  throw err;
}
