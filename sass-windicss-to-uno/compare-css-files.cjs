const fs = require('fs');
const path = require('path');

// Paths to the two CSS files
const cssFilePath1 = path.join(__dirname, 'windi.min.css');
const cssFilePath2 = path.join(__dirname, 'uno.min.css');

// Function to read file content
function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to compare file contents
async function compareFiles(filePath1, filePath2) {
  try {
    const [content1, content2] = await Promise.all([
      readFileContent(filePath1),
      readFileContent(filePath2)
    ]);

    if (content1 === content2) {
      console.log('The files are equal.');
    } else {
      console.log('The files are not equal.');
    }
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

// Run the comparison
compareFiles(cssFilePath1, cssFilePath2);
