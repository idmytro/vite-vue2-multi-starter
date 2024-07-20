const fs = require('fs');
const path = require('path');

// Path to the input CSS file
const inputFilePath = path.join(__dirname, 'windi.cc.css');
// Path to the output CSS file
const outputFilePath = path.join(__dirname, 'windi.un.css');

// Read the input CSS file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  // Replace '--tw-' with '--un-'
  const result = data.replace(/--tw-/g, '--un-');

  // Write the modified content to the output file
  fs.writeFile(outputFilePath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the output file:', err);
      return;
    }

    console.log('File has been updated successfully and saved to', outputFilePath);
  });
});
