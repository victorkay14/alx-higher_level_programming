#!/usr/bin/node

"use strict";

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: ./read-file.js <file-path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // Print the error if reading the file fails
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  } else {
    // Print the content of the file if reading is successful
    console.log('File content:\n', data);
  }
});
