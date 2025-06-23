// const fs = require('fs');


// //❓ Checking if a Directory Exists 🔹 Using fs.existsSync

// if(fs.existsSync('nested', {recursive: true})){ 
//     console.log('Directory exists');
// }
// else {
//     console.log('Directory does not exist');
// }

// // fs.existsSync() checks if a file or directory exists at the given path.
// // Returns true if it exists, false otherwise.
// // Note: This is a synchronous method and can block the event loop.


// // For non-blocking checks, use fs.access() with a callback or promises.
// // Example:
//✅ Option 1: Use the promise-based version
// const fs = require('fs').promises;
// fs.access('nested')
//   .then(() => {
//     console.log('File or directory exists');
//   })
//   .catch(() => {
//     console.log('File or directory does not exist');
//   });

// // fs.access() checks if a file or directory is accessible.

//✅ Option 2: Use the callback version
const fs = require('fs');

fs.access('nested', (err) => {
  if (err) {
    console.log('File or directory does not exist');
  } else {
    console.log('File or directory exists');
  }
});
