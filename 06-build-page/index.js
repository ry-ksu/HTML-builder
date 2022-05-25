const path = require('path');
const fsPromises = require('fs').promises;

const pathAssets = path.resolve(__dirname, '.\\project-dist', '.\\assets');

async function createIndexHtml() {
  try {
    await fsPromises.mkdir(path.resolve(__dirname, '.\\project-dist'), { recursive: true });
    try {
      let dataTemplate = await fsPromises.readFile(path.resolve(__dirname, 'template.html'), 'utf-8');
      try {
        const files = await fsPromises.readdir(path.resolve(__dirname, '.\\components'));
        for (let file of files) {
          try {
            let dataFile = await fsPromises.readFile(path.resolve(__dirname, '.\\components', file));
            let fileName = file.split('.')[0];
            dataTemplate = dataTemplate.replace(`{{${fileName}}}`, dataFile);
          } catch (err) {
            throw err;
          }
        }
        try {
          fsPromises.writeFile(path.join(__dirname, '.\\project-dist', 'index.html'), dataTemplate);
        } catch (err) {
          throw err;
        }
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  } catch (err) {
    throw err;
  }
}

async function createStyles() {
  try {
    const filesStyle = await fsPromises.readdir(path.resolve(__dirname, '.\\styles'), { withFileTypes: true });
    let fileStyleBundle = '';
    for (let file of filesStyle) {
      try {
        if (path.extname(file.name) === '.css' && file.isFile() === true) {
          try {
            let fileStyle = await fsPromises.readFile(path.join(__dirname, '.\\styles', file.name), 'utf-8');
            fileStyleBundle += fileStyle;
          } catch (err) {
            throw err;
          }
        }
      } catch (err) {
        throw err;
      }
    }
    try {
      fsPromises.writeFile(path.resolve(__dirname, 'project-dist', 'style.css'), fileStyleBundle);
    } catch (err) {
      throw err;
    }
  } catch (err) {
    throw err;
  }
}

async function createAssets() {
  try {
    await fsPromises.rm(pathAssets, { recursive: true, force: true });
  } catch (err) {
    throw err;
  }

  try {
    await fsPromises.mkdir(pathAssets, { recursive: true });
  } catch (err) {
    throw err;
  }

  try {
    const filesAssets = await fsPromises.readdir(path.resolve(__dirname, '.\\assets'), { withFileTypes: true });
    for (let fileAssets of filesAssets) {
      if (!fileAssets.isFile()) {
        try {
          await fsPromises.mkdir(path.resolve(__dirname, '.\\project-dist', '.\\assets', fileAssets.name));
          const filesAssetsDir = await fsPromises.readdir(path.resolve(__dirname, '.\\assets', fileAssets.name), { withFileTypes: true });
          for (let fileAssetsDir of filesAssetsDir) {
            try {
              fsPromises.copyFile(
                path.resolve(__dirname, '.\\assets', fileAssets.name, fileAssetsDir.name),
                path.resolve(__dirname, '.\\project-dist', '.\\assets', fileAssets.name, fileAssetsDir.name)
              );
            } catch (err) {
              throw err;
            }
          }
        } catch (err) {
          throw err;
        }
      }
    }
  } catch (err) {
    throw err;
  }
}

createIndexHtml();
createStyles();
createAssets();
