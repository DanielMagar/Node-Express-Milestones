// make sure Yargs is installed in your project
// hello.js
// BasicUse.js
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

console.log(`Hello, ${argv.name || 'World'}!`);


/**
 * 🔍 What is hideBin?
      - hideBin is a helper function provided by yargs that prepares the command-line arguments (process.argv) by removing the first two elements:

        process.argv by default:
         [
            '/usr/bin/node',          // Node binary
            '/path/to/your/script.js',// Your script path
            '--name=Daniel'           // Actual user input
        ]
    
        - When you run: node BasicUse.js --name=Daniel
          process.argv contains:    [0] node
                                    [1] BasicUse.js
                                    [2] --name=Daniel
        - 🔧 hideBin(process.argv) removes the first two: hideBin(process.argv) ➝ ['--name=Daniel']
            So yargs sees only the user-provided arguments.

            this is useful because yargs expects only the arguments that the user provides, not the Node.js runtime details.
            and this is require only in yargs@17 and later versions.
        - before that you can use yargs(process.argv.slice(2)) to achieve the same effect.
 * 
 */
