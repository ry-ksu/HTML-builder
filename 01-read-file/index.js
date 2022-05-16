const { stdout } = process;
const fs = require('fs');
const path = require('path');
let data = '';

const readableStream = fs.createReadStream(
  path.join(__dirname, 'text.txt'),
  'utf-8'
);

readableStream.on('data', (chunk) => (data += chunk));
readableStream.on('end', () => stdout.write(data));
readableStream.on('error', (error) => stdout.write(`Error ${error.message}`));
