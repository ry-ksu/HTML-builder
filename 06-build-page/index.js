const path = require('path');
const fs = require('fs');

fs.mkdir(
  path.join(__dirname, '.\\project-dist'),
  { recursive: true },
  (err) => {
    if (err) throw err;
    fs.readFile(path.join(__dirname, 'template.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      fs.readFile(
        path.join(__dirname, 'components', 'header.html'),
        'utf-8',
        (err, dataHeader) => {
          if (err) throw err;
          fs.readFile(
            path.join(__dirname, 'components', 'articles.html'),
            'utf-8',
            (err, dataArticles) => {
              if (err) throw err;
              fs.readFile(
                path.join(__dirname, 'components', 'footer.html'),
                'utf-8',
                (err, dataFooter) => {
                  if (err) throw err;
                  fs.readFile(
                    path.join(__dirname, 'components', 'about.html'),
                    'utf-8',
                    (err, dataAbout) => {
                      if (err);
                      let result = data.replace(/{{header}}/, dataHeader);
                      result = result.replace(/{{articles}}/, dataArticles);
                      result = result.replace(/{{footer}}/, dataFooter);
                      result = result.replace(/{{about}}/, dataAbout);
                      fs.writeFile(
                        path.join(__dirname, '.\\project-dist', 'index.html'),
                        result,
                        (err) => {
                          if (err) throw err;
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  }
);

fs.writeFile(path.join(__dirname, 'project-dist', 'style.css'), '', (err) => {
  if (err) throw err;
});

fs.readdir(
  path.join(__dirname, '.\\styles'),
  { withFileTypes: true },
  (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach((file) => {
        if (path.extname(file.name) === '.css' && file.isFile() === true) {
          fs.readFile(
            path.join(__dirname, '.\\styles', file.name),
            'utf-8',
            (err, data) => {
              if (err) throw err;
              fs.appendFile(
                path.join(__dirname, 'project-dist', 'style.css'),
                data,
                (err) => {
                  if (err) throw err;
                }
              );
            }
          );
        }
      });
    }
  }
);

fs.mkdir(
  path.join(__dirname, 'project-dist', 'assets', 'fonts'),
  { recursive: true },
  (err) => {
    if (err) {
      throw err;
    } else {
      fs.readdir(
        path.resolve(__dirname, 'project-dist', 'assets', 'fonts'),
        (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            fs.unlink(
              path.resolve(__dirname, 'project-dist', 'assets', 'fonts', file),
              (err) => {
                if (err) throw err;
              }
            );
          });
        }
      );

      fs.readdir(path.resolve(__dirname, 'assets', 'fonts'), (err, files) => {
        if (err) console.log(err);
        files.forEach((file) => {
          fs.copyFile(
            path.resolve(__dirname, 'assets', 'fonts', file),
            path.resolve(__dirname, 'project-dist', 'assets', 'fonts', file),
            (err) => {
              if (err) throw err;
            }
          );
        });
      });
    }
  }
);

fs.mkdir(
  path.join(__dirname, 'project-dist', 'assets', 'img'),
  { recursive: true },
  (err) => {
    if (err) {
      throw err;
    } else {
      fs.readdir(
        path.resolve(__dirname, 'project-dist', 'assets', 'img'),
        (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            fs.unlink(
              path.resolve(__dirname, 'project-dist', 'assets', 'img', file),
              (err) => {
                if (err) throw err;
              }
            );
          });
          fs.readdir(path.resolve(__dirname, 'assets', 'img'), (err, files) => {
            if (err) console.log(err);
            files.forEach((file) => {
              fs.copyFile(
                path.resolve(__dirname, 'assets', 'img', file),
                path.resolve(__dirname, 'project-dist', 'assets', 'img', file),
                (err) => {
                  if (err) throw err;
                }
              );
            });
          });
        }
      );
    }
  }
);

fs.mkdir(
  path.join(__dirname, 'project-dist', 'assets', 'svg'),
  { recursive: true },
  (err) => {
    if (err) {
      throw err;
    } else {
      fs.readdir(
        path.resolve(__dirname, 'project-dist', 'assets', 'svg'),
        (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            fs.unlink(
              path.resolve(__dirname, 'project-dist', 'assets', 'svg', file),
              (err) => {
                if (err) throw err;
              }
            );
          });
          fs.readdir(path.resolve(__dirname, 'assets', 'svg'), (err, files) => {
            if (err) console.log(err);
            files.forEach((file) => {
              fs.copyFile(
                path.resolve(__dirname, 'assets', 'svg', file),
                path.resolve(__dirname, 'project-dist', 'assets', 'svg', file),
                (err) => {
                  if (err) throw err;
                }
              );
            });
          });
        }
      );
    }
  }
);
