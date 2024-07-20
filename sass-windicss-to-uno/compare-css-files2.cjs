const fs = require('fs');
const path = require('path');

// Paths to the input files
const file1Path = path.join(__dirname, 'windi.min.css');
const file2Path = path.join(__dirname, 'uno.min.css');

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

// Function to check if all lines from file1 are present in file2
async function checkLines(file1Path, file2Path) {
  try {
    const [content1, content2] = await Promise.all([
      readFileContent(file1Path),
      readFileContent(file2Path)
    ]);

    const lines1 = new Set(content1.split('\n').map(line => line.trim()).filter(line => line.length > 0));
    const lines2 = new Set(content2.split('\n').map(line => line.trim()).filter(line => line.length > 0));

    let allPresent = true;
    lines1.forEach(line => {
      if (!lines2.has(line)) {
        console.log(`Line not found in file2: "${line}"`);
        allPresent = false;
      }
    });

    if (allPresent) {
      console.log('All lines from file1 are present in file2.');
    } else {
      console.log('Some lines from file1 are missing in file2.');
    }
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

// Run the check function
checkLines(file1Path, file2Path);
