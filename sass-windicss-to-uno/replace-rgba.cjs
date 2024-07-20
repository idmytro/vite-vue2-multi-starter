const fs = require('fs');
const path = require('path');

// Path to the input CSS file
const inputFilePath = path.join(__dirname, 'windi.un.css');
// Path to the output CSS file (you can set it to the same as inputFilePath to overwrite)
const outputFilePath = path.join(__dirname, 'windi.un2.css');

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

// Function to replace rgba with rgb
function replaceRgbaWithRgb(content) {
  return content.replace(/rgba\((\d+),(\d+),(\d+),\s*var\(([^)]+)\)\)/g, 'rgb($1 $2 $3 / var($4))');
}

// Function to process the CSS file
async function processCssFile(inputPath, outputPath) {
  try {
    const content = await readFileContent(inputPath);
    const modifiedContent = replaceRgbaWithRgb(content);
    await writeFileContent(outputPath, modifiedContent);
    console.log(`File has been updated successfully and saved to ${outputPath}`);
  } catch (err) {
    console.error('Error processing file:', err);
  }
}

// Run the processing function
processCssFile(inputFilePath, outputFilePath);
