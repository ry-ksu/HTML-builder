const path = require('path');
const fs = require('fs');
const directory = path.resolve(__dirname, '.\\secret-folder');

fs.readdir(directory, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      if (file.isFile() === true) {
        fs.stat(
          path.resolve(__dirname, '.\\secret-folder', file.name),
          (err, stats) => {
            if (err) {
              console.log(err);
            } else {
              console.log(
                `< ${file.name.split('.')[0]} - ${path.extname(file.name).slice(1)} - ${stats.size}byte >`
              );
            }
          }
        );
      }
    });
  }
});
