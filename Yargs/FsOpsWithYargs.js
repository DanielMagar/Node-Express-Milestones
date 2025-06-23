const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const fs = require('fs');
const path = require('path');   

const argv = yargs(hideBin(process.argv))
    .option('filename', {
        describe : 'Name of the file to create',
        type: 'string',
        demandOption: true, // This makes the filename argument required
    }).argv 
       
               
const fileName = argv.filename;
const directory = path.resolve(__dirname);
const logFile = path.join(directory, 'file-log.txt');
const newFilePath = path.join(directory, fileName);


// Step 1: Read existing filenames
let createdFiles = [];
if (fs.existsSync(logFile)) {
  const content = fs.readFileSync(logFile, 'utf-8');
  createdFiles = content.split('\n').filter(Boolean);
}

// Step 2: Check if file already exists
if (createdFiles.includes(fileName) || fs.existsSync(newFilePath)) {
  console.log(`\u274C File "${fileName}" already exists. Please use a different name.`);
  process.exit(1);
}

// Step 3: Write "You are awesome" to the new file
fs.writeFileSync(newFilePath, 'You are awesome');
console.log(`\u2705 File "${fileName}" created successfully.`);

// Step 4: Log filename to file-log.txt
fs.appendFileSync(logFile, fileName + '\n');