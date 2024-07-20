const fs = require('fs');
const path = require('path');

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

// Function to write file content
function writeFileContent(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Function to sort lines in a file
async function sortLinesInFile(inputPath, outputPath) {
  try {
    const content = await readFileContent(inputPath);
    const sortedContent = content
      .split('\n')           // Split content into lines
      .sort((a, b) => a.localeCompare(b)) // Sort lines alphabetically
      .join('\n');           // Join sorted lines back into a string

    await writeFileContent(outputPath, sortedContent);
    console.log(`File has been sorted and saved to ${outputPath}`);
  } catch (err) {
    console.error('Error processing file:', err);
  }
}


const i1 = path.join(__dirname, 'windi.min.css');
const o1 = path.join(__dirname, 'windi.sorted.css');

const i2 = path.join(__dirname, 'uno.min.css');
const o2 = path.join(__dirname, 'uno.sorted.css');

// Run the sorting function
sortLinesInFile(i1, o1);
sortLinesInFile(i2, o2);
