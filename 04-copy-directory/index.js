const path = require('path');
const fsPromises = require('fs').promises;

const path_files_copy = path.resolve(__dirname, '.\\files-copy');

async function copyDir() {
  try {
    await fsPromises.rm(path_files_copy, { recursive: true, force: true });
  } catch (err) {
    throw err;
  }

  try {
    await fsPromises.mkdir(path_files_copy, { recursive: true });
  } catch (err) {
    throw err;
  }

  try {
    const files = await fsPromises.readdir(path.resolve(__dirname, '.\\files'));
    for (const file of files) {
      try {
        fsPromises.copyFile(
          path.resolve(__dirname, '.\\files', file),
          path.resolve(__dirname, '.\\files-copy', file)
        );
      } catch (err) {
        throw err;
      }
    }
  } catch (err) {
    throw err;
  }
}

copyDir();
