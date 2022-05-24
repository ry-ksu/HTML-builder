const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'text.txt'), '', (err) => {
  if (err) throw err;
});

stdout.write(`Please, enter the text for add to 'text.txt': \n`);

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  fs.appendFile(path.join(__dirname, 'text.txt'), data, (err) => {
    if (err) {
      throw err;
    }
  });
});

process.on('SIGINT', () => {
  process.exit();
});

process.on('exit', (code) => {
  if (code === 0) {
    stdout.write(`Good luck on the course!`);
  } else {
    stderr.write(`Error ${code}`);
  }
});
