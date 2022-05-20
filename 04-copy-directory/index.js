const path = require('path');
const fs = require('fs');

const copyFolder = () => {
  fs.mkdir(
    path.join(__dirname, '.\\files-copy'),
    { recursive: true },
    (err) => {
      if (err) {
        throw err;
      } else {
        fs.readdir(path.resolve(__dirname, '.\\files-copy'), (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            fs.unlink(path.resolve(__dirname, '.\\files-copy', file), (err) => {
              if (err) throw err;
            });
          });
        });

        fs.readdir(path.resolve(__dirname, '.\\files'), (err, files) => {
          if (err) console.log(err);
          else {
            files.forEach((file) => {
              fs.copyFile(
                path.resolve(__dirname, '.\\files', file),
                path.resolve(__dirname, '.\\files-copy', file),
                (err) => {
                  if (err) throw err;
                }
              );
            });
          }
        });
      }
    }
  );
};

copyFolder();
