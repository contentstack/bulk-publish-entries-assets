const fs = require('fs');

function doesFileExistInGivenDirectory(filename, directory) {
  const files = fs.readdirSync(directory);
  return files.indexOf(filename) !== -1;
}

module.exports = {
  doesFileExistInGivenDirectory,
};
